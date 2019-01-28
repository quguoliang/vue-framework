var path = require('path');
var client = require('scp2');
// const pkgConfig = require('./package.json'); //版本信息，看情况

// var hostInfo = require('./.publish.json');

var sourcePath = path.resolve(__dirname, './dist');

client.scp(
	sourcePath,
	{
		host: '',
		username: '',
		password: '',
		path: '',
	},
	function(err) {
		if (err) {
			console.log('打包发布错误：' + err);
			throw err;
		} else {
			console.log('发布成功！');
		}
	}
);
