<template>
	<div id="app">
		<ul>
			<li><router-link to="/home">cur Home</router-link></li>
			<li><router-link to="/about">cur About</router-link></li>
			<li>-----------------</li>
			<li @click="goPage('home')">cur Home 2</li>
			<li @click="goPage('about')">cur About 2</li>
		</ul>
		<p>This is Children Page</p>
		<router-view />
	</div>
</template>

<script>
export default {
	methods: {
		goPage(path) {
			this.$router.pash({
				path: `${path}`,
			})
		},
	},
}
</script>
