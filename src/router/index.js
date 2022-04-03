import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
const Login = () => import('@/views/Login.vue');
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		// route level code-splitting
		// this generates a separate chunk (Home.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Home" */ '@/views/layout/Home.vue'),
		children: [],
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			name: 'my name is Login',
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
    console.log(to)
	const isLogin = store.getters.isLogin;
	if (to.matched.some(r=>r.meta.requiresAuth)) {
		isLogin ? next():next('/login')
	} else {
		next();
	}
});

export default router;
