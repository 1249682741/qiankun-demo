import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

new Vue({
	router,
	store,
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

// 组件间的通讯
const actions = initGlobalState(store.state.qiankunData)
actions.onGlobalStateChange((state, prev) => {
	console.log('parent state', state)
	console.log('parent prev', prev)
	store.commit('setQiankunData', state)
})
store.commit('initQiankunSetGlobalStateFunc', actions.setGlobalState)

start()
