<template>
	<div id="app">
		<ul>
			<li>----------------- *********** --------------</li>
			<li><router-link to="home">cur Home</router-link></li>
			<li><router-link to="about">cur About</router-link></li>
			<li @click="goPage('home')">cur Home 2</li>
			<li @click="goPage('about')">cur About 2</li>
			<li>----------------- *********** --------------</li>
			<li><router-link to="/home">parent Home</router-link></li>
			<li><router-link to="/about">parent About</router-link></li>
			<li @click="goPage('/home')">parent Home 2</li>
			<li @click="goPage('/about')">parent About 2</li>
			<li>----------------- *********** --------------</li>
		</ul>
		<p>This is Children Page</p>
		<div>
			<p>name: {{ qiankunData }}</p>
			<p>inputTxt: {{ inputTxt }}</p>
			<input type="text" v-model="inputTxt" />
			<button @click="onClick">确定</button>
		</div>
		<router-view />
	</div>
</template>

<script>
/* eslint-disable */
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
		goPage(path) {
			this.$router.push({
				path: `${path}`,
			})
		},
	},
}
</script>
