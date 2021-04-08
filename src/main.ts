import { createApp } from 'vue'
import App from './App.vue'
import routers from './routes'
import store from './vuex/store'

const app = createApp(App);
// 挂载路由
app.use(routers);
// 挂载vuex
app.use(store);
app.mount('#app');
