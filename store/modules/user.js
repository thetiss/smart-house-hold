export default {
	state: {
		username: '',
		phone: '',
		avatar: '',
	},
	actions: {

	},
	getters: {},
	mutations: {
		SET_USERNAME: (state, name) => {
			state.username = name;
		},
		SET_PHONE: (state, phone) => {
			state.phone = phone;
		},
		SET_AVATAR: (state, avatarUrl) => {
			state.avatar = avatarUrl;
		}
	},
}
