import axios from 'axios';
const instance = axios.create({
	baseURL: ' https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use(
	(config) => {
		return config;
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
