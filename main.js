import App from './App'
import messages from './locale/index'
import store from './store/index.js'
import api from './api/index.js'

let i18nConfig = {
	locale: uni.getLocale(),
	messages
}

const msgError = (msg = '提示信息', duration = 3000, type = 'fail') => {
	uni.showToast({
		title: msg,
		type,
		duration,
	})
}

const msgSuccess = (msg = '提示信息', duration = 3000, type = 'success') => {
	uni.showToast({
		title: msg,
		type,
		duration,
	})
}

const showLongMsg = (msg = '提示信息', duration = 3000, type = 'none') => {
	uni.showToast({
		title: msg,
		type,
		duration,
	})
}

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.prototype.$msgError = msgError
Vue.prototype.$msgSuccess = msgSuccess
Vue.prototype.$showLongMsg = showLongMsg

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	createI18n
} from 'vue-i18n'
const i18n = createI18n(i18nConfig)
export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {
		app
	}
}
// #endif
