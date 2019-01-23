import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import store from './stores/store';
import Message from '@/components/message/message.js';
import '@/icons';
import filters from '@/utils/filters';

Vue.config.productionTip = false;
Vue.prototype.$message = Message.install;

for (let key in filters) {
	if (!filters.hasOwnProperty(key)) {
		continue;
	}
	Vue.fileter(filters[key]);
}
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
