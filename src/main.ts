import { createApp } from 'vue'
import App from './App.vue'
import routers from './routes'

const app = createApp(App);
// 挂载路由
app.use(routers);
app.mount('#app');
