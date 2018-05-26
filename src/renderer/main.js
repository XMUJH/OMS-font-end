import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import sidebar from './components/common/Sidebar.vue'
import sidebar2 from './components/common/Sidebar2.vue'
import breadcrumb from './components/common/Breadcrumb.vue'
import breadcrumb2 from './components/common/Breadcrumb2.vue'
import tabs from './components/common/Tabs.vue'
import tabs2 from './components/common/Tabs2.vue'
import Mytitle from './components/common/Title.vue'
import Searchbar from './components/common/Searchbar.vue'
import './style/style.css'
import contextmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import draggable from 'vuedraggable'

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
  Vue.use(ElementUI)
  Vue.component('sidebar', sidebar)
  Vue.component('breadcrumb', breadcrumb)
  Vue.component('breadcrumb2', breadcrumb2)
  Vue.component('tabs', tabs)
  Vue.component('tabs2', tabs2)
  Vue.component('Mytitle', Mytitle)
  Vue.component('searchbar', Searchbar)
  Vue.component('sidebar2', sidebar2)
  Vue.use(contextmenu)
  Vue.use(draggable)
  Vue.component('draggable', draggable)
}
Vue.prototype.$http = axios
Vue.config.productionTip = false
global.HOST = 'http://localhost:8080'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
