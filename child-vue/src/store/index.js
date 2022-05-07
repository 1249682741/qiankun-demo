import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		qiankunData: {},
		qiankunSetGlobalStateFunc: () => {},
	},
	getters: {},
	mutations: {
		setQiankunData(state, data) {
			state.qiankunData = data
		},
		initQiankunSetGlobalStateFunc(state, func) {
			state.qiankunSetGlobalStateFunc = func
		},
	},
	actions: {
		noticeQiankun({ commit, state }, data) {
			commit('setQiankunData', data)
			state.qiankunSetGlobalStateFunc(state.qiankunData)
		},
	},
	modules: {},
})
