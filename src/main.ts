import { createApp } from 'vue'
import App from './App.vue'
import routers from './router'
import store from './store'
// 引入antd-vue
import Antd from 'ant-design-vue'
import './styles/global.less'


const app = createApp(App);
// 挂载路由
app.use(routers);
// 挂载vuex
app.use(store);
// 注入antd
app.use(Antd);
app.mount('#app');
