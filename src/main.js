// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/router.js'
import Utils from './js/utils.js'
import QlDialog from './components/teacher/common/dialog.vue'
import QlFilter from './components/teacher/common/filter'
import QlConfirm from './components/teacher/common/confirm'

Vue.prototype.$utils = Utils

Vue.config.productionTip = false

Vue.component('ql-dialog', QlDialog)
Vue.component('ql-filter', QlFilter)
Vue.component('ql-confirm', QlConfirm)

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
});