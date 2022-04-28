const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		port: '18081',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
})
