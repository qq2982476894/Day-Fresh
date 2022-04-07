import axios from 'axios';
import store from '@/store'
const instance = axios.create({
	baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use(
	(config) => {
        if(config.url.includes('/passport')){
            return config
        }else{
            return{
                ...config,
                params:{
                    ...config.params,
                    appkey:store.state.user.appkey
                }
            }
        }
        
	},
	(err) => {
		return  Promise.reject(err);
	}
);
instance.interceptors.response.use(
	(response) => {
		if (response.data.status == 'fail') {
			return Promise.reject(response.data.msg);
		} else {
			return response.data.data;
		}
	},
	(err) => {
		return Promise.reject(err);
	}
);
export default instance;
