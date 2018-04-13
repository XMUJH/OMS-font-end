import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import sidebar from './components/common/Sidebar.vue'
import breadcrumb from './components/common/Breadcrumb.vue'
import tabs from './components/common/Tabs.vue'
import Mytitle from './components/common/Title.vue'
import Searchbar from './components/common/Searchbar.vue'
import './style/style.css'
if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
  Vue.use(ElementUI)
  Vue.component('sidebar', sidebar)
  Vue.component('breadcrumb', breadcrumb)
  Vue.component('tabs', tabs)
  Vue.component('Mytitle', Mytitle)
  Vue.component('searchbar', Searchbar)
}
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
