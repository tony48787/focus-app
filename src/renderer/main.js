import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'
  
// configure language
locale.use(lang);

// Add your new component
import ElementUI from 'element-ui';
Vue.use(ElementUI);
// End Add

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
}).$mount('#app');
