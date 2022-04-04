import Vue from 'vue';
import VeLine from 'v-charts/lib/line.common'
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/global.css'; 
Vue.config.productionTip = false;
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.component(VeLine.name, VeLine)
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
