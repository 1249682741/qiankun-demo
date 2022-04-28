<template>
	<div id="app">
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
