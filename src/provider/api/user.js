import request from '../request';

export default {
	//登录
	login(param) {
		return request({
			url: '/login',
			method: 'post',
			param,
		});
	},
};
