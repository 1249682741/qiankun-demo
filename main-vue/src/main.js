import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)

registerMicroApps([
	{
		name: 'child-vue',
		entry: '//localhost:18082/',
		activeRule: getActiveRule('#/child-vue'),
		container: '#child-vue',
		props: {
			routePrefix: '/child-vue',
		},
	},
])

start()
