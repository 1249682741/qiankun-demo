import Vue from 'vue'
import App from './App'
import './public-path'
import VueRouter from 'vue-router'
import { getRoutes } from './router'
import store from './store'

Vue.use(VueRouter)

let instance = null
let router = null

function render(props) {
	const { container, routePrefix } = props

	router = new VueRouter({
		mode: 'hash',
		routes: getRoutes(window.__POWERED_BY_QIANKUN__ ? routePrefix : '/'),
	})
	instance = new Vue({
		store,
		router,
		render: (h) => h(App),
	}).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
	render()
}

export async function bootstrap() {
	console.log('child call bootstrap')
}
export async function mount(props) {
	console.log('child call mount')
	props.onGlobalStateChange((state, prev) => {
		console.log('child state', state)
		console.log('child prev', prev)
		store.commit('setQiankunData', state)
	}, true) // 立即触发callback事件
	store.commit('initQiankunSetGlobalStateFunc', props.setGlobalState)
	render(props)
}
export async function unmount() {
	console.log('child call unmount')
	instance.$destroy()
	instance.$el.innerHTML = ''
	instance = null
	router = null
}
