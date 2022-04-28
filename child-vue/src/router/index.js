import BaseRouter from '@/components/BaseRouter.vue'
export function getRoutes(prefix = '') {
	return [
		{
			path: prefix,
			component: BaseRouter,
			children: [
				{ path: 'home', component: () => import('@/views/home.vue') },
				{ path: 'about', component: () => import('@/views/about.vue') },
			],
		},
	]
}
