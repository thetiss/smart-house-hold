import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		member: {
			nickname: '',
			phone: '',
			avatar: '',
		}
	},
	actions: {

	},
	getters: {
		isLogin: (state) => {
			return state.member.nickname?.length > 0
		}
	},
	mutations: {
		SET_MEMBER: (state, user) => {
			state.member = user;
		}
	},
	modules: {
		// user,
	}
})

export default store;
