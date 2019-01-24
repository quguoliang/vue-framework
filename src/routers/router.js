import Vue from 'vue';
import Router from 'vue-router';
// import Error from 'views/404.vue';
// import Index from 'views/Index';

const isDev = process.env.NODE_ENV === 'development';

Vue.use(Router);

let r;
if (isDev) {
	r = require.context('../views', true, /\.vue$/);
} else {
	r = require.context('../views', true, /^(?!\.\/demos).*?\.vue$/);
}

const keys = r.keys(),
	components = [];

keys.forEach(key => {
	const component = {
		name: key.replace(/\.\/|\.vue/g, '').toLowerCase(),
		component: r(key).default,
	};

	components.push(component);

	//省略默认index后缀时，自动匹配路由
	if (/.*index$/.test(component.name)) {
		const name = component.name.replace(/index$/, '');
		components.push({ ...component, name });
	}
});
const Home = components.find(item => item.name === 'index').component;
const Error = components.find(item => item.name === '404').component;
console.log(components);
// console.log('components', components);
const routes = components.map(item => {
	return {
		path: `/${item.name}`,
		name: item.name,
		component: item.component,
	};
});

routes.unshift(
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '*',
		name: 'error',
		component: Error,
	}
);

//使用webpack动态加载机制，重构路由文件加载方式
const router = new Router({
	mode: 'history',
	base: '/',
	routes,
});

export default router;

// function loadView(view) {
// 	return () => import(`views/${view}`);
// }

// export default new Router({
// 	mode: 'history',
// 	base: process.env.BASE_URL,
// 	routes: [
// 		{
// 			path: '*',
// 			name: 'error',
// 			component: Error,
// 		},
// 		{
// 			path: '/',
// 			name: 'home',
// 			component: loadView('Index'),
// 		},
// 		{
// 			path: '/index',
// 			name: 'index',
// 			// route level code-splitting
// 			// this generates a separate chunk (about.[hash].js) for this route
// 			// which is lazy-loaded when the route is visited.
// 			component: loadView('Index'),
// 		},
// 	],
// });
