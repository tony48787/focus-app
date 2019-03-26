import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang);

import { Button, InputNumber, TimePicker, Card, Row, Col, Progress, Checkbox } from 'element-ui';
Vue.use(Button);
Vue.use(InputNumber);
Vue.use(TimePicker);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
Vue.use(Checkbox);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
}).$mount('#app');
