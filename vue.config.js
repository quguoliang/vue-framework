const path = require('path');
function resolve(dir) {
	return path.join(__dirname, './', dir);
}

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/assets/styles/theme.scss')],
		});
}

module.exports = {
	outputDir: 'dist',
	lintOnSave: false,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'));

		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));

		//svg loader
		const svgRule = config.module.rule('svg'); //找到svg loader
		svgRule.uses.clear(); //清除其他对svg处理的loader，不然会在已有的loader后添加
		svgRule.exclude.add(/node_modules/); //正则匹配排除node_modules目录
		svgRule
			.test(/\.svg$/)
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: '[name]', //添加svg的symbolId标识
			});

		//修改iasges loader 添加svg处理
		const imagesRule = config.module.rule('images');
		imagesRule.exclude.add(resolve('src/icons'));
		config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);

		// 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
		config.plugin('define').tap(args => {
			const argv = process.argv;
			const mode = argv[argv.indexOf('--project-mode') + 1];
			args[0]['process.env'].MODE = `"${mode}"`;
			args[0]['process.env'].BASE_API = '""';
			return args;
		});
	},

	devServer: {
		port: 8088,
		proxy: {
			'/api': {
				target: '0.0.0.0',
				changeOrigin: true,
				pathRewrite: {},
			},
		},
	},
};
