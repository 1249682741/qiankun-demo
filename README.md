# qiankun框架的简单使用

## demo介绍
父子应用都是使用的 ``vue`` 框架，且路由模式都是 ``hash`` 模式。

## 跳转方式
* 父应用跳转父应用：正常使用vue-router进行跳转
* 父以用跳转子应用：添加子应用对应的路由前缀进行跳转， 推荐用path方式进行跳转
* 子应用跳转子应用：
  *  使用path的方式进行跳转，不加/
  *  使用path的方式进行跳转，补充子应用前缀（感觉这种方式比较呆）
* 子应用跳转父应用：正常使用vue-router进行跳转

## 父子应用间的通信
使用 ``vuex`` 进行状态管理，将需要通信的数据与 ``setGlobalState`` 方法挂载到 ``state`` 上面。 


```
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

```