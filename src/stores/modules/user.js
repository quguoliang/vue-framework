import { getToken, setToken } from '@/utils/auth';
import api from '@/provider/api/user';

const user = {
	state: {
		token: getToken(),
		name: '',
		avatar: '',
		roles: [],
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_NAME: (state, name) => {
			state.name = name;
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar;
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles;
		},
	},

	actions: {
		// 登录
		Login({ commit }, userInfo) {
			return new Promise((resolve, reject) => {
				api.login(userInfo)
					.then(res => {
						if (res.code === 200) {
							setToken(res.data);
							commit('SET_TOKEN', res.data);
						}
						resolve();
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	},
};

export default user;
