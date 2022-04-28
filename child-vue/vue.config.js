const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')

module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		output: {
			library: `${name}`,
			libraryTarget: 'umd',
		},
	},
	devServer: {
		port: '18082',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
})
