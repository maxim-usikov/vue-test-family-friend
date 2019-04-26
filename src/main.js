import Vue from 'vue';
import App from './App.vue';

import 'normalize.css';
import '@/plugins/vue-global-config';

new Vue({
  render: h => h(App),
}).$mount('#app');
