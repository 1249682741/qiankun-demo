<template>
	<div id="app">
		<div>
			<p>应用间的通讯：</p>
			<p>name: {{ qiankunData.name }}</p>
			<input type="text" v-model="inputTxt" />
			<button @click="onClick">点击修改数据</button>
		</div>
		<ul>
			<li><router-link to="/home">Parent Home</router-link></li>
			<li><router-link to="/about">Parent About</router-link></li>
			<p>-----------------------------</p>
			<li><router-link to="/child-vue/home">Child Home</router-link></li>
			<li><router-link to="/child-vue/about">Child About</router-link></li>
		</ul>
		<router-view />
		<div id="child-vue" />
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	data() {
		return {
			inputTxt: '',
		}
	},
	computed: {
		...mapState(['qiankunData']),
	},
	methods: {
		onClick() {
			this.noticeQiankun({ name: this.inputTxt })
		},
		...mapActions(['noticeQiankun']),
	},
}
</script>
