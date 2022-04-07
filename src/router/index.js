import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
const Login = () => import('@/views/Login.vue');
import Home from '@/views/layout/Home.vue';
import getMenuRoutes from '@/utils/permission.js';

Vue.use(VueRouter);
const asyncRoutes = [
	{
		path: '/product',
		name: 'Product',
		component: Home,
		meta: {
			title: '商品',
			requiresAuth: true,
			icon: 'profile',
		},
        
		children: [
			{
				path: 'list',
				name: 'productList',
				component: () => import('@/views/pages/proList.vue'),
				meta: {
					title: '商品列表',
					icon: 'unordered-list',
				},
			},
			{
				path: 'add',
				name: 'productAdd',
				component: () => import('@/views/pages/proAdd.vue'),
				meta: {
					title: '添加商品',
					icon: 'file-add',
				},
			},
			{
				path: 'category',
				name: 'Category',
				component: () => import('@/views/pages/category.vue'),
				meta: {
					title: '商品种类',
					icon: 'gold',
				},
			},
            {
                path: '/edit/:id',
                name: 'productEdit',
                component: () => import('@/views/pages/proAdd.vue'),
                meta: {
                    title: '编辑商品',
                    icon: 'file-add',
                    hide: true,
                },
            },
		],
	},
   
   
];
const routes = [
	{
		path: '/',
		name: 'Home',
		redirect: '/index',
		component: Home,
		children: [
			{
				path: 'index',
				name: 'Index',
				component: () => import('@/views/pages/index.vue'),
				meta: {
					title: '统计',
					icon: 'area-chart',
				},
			},
		],
		meta: {
			requiresAuth: true,
			title: '首页',
			icon: 'home',
		},
	},

	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'login',
			name: 'my name is Login',
			hide: true,
		},
	},
   
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
	const isLogin = store.getters.isLogin;
	// to.matched.some((r) => r.meta.requiresAuth) ||

    if(isLogin){
        if(to.path !=='login'){
            if (!isAddRoutes) {
                // store.state.user.role
                const menuRoutes = getMenuRoutes('admin', asyncRoutes);
                store
                    .dispatch('setMenuRoutes', routes.concat(menuRoutes))
                    .then(() => {
                        for (const menu of menuRoutes) {
                            router.addRoute(menu);
                        }
                        
                    });
                isAddRoutes = true;
            }
           return next()
            
        }
      return next()
    }else{
        to.path === '/login' ? next() : next('/login');
    }

	// if (to.path != 'login') {
	// 	if (!isAddRoutes) {
	// 		// store.state.user.role
	// 		const menuRoutes = getMenuRoutes('admin', asyncRoutes);
	// 		store
	// 			.dispatch('setMenuRoutes', routes.concat(menuRoutes))
	// 			.then(() => {
	// 				router.addRoute(...menuRoutes);
	// 			});
	// 		isAddRoutes = true;
	// 	}
	// 	next();
	// } 
});

export default router;
