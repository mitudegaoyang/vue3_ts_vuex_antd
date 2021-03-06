import { createRouter, createWebHistory } from 'vue-router';
// 引入组件
import Container from "../views/Container.vue";
import Login from "../views/acount/Login.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import List from "../views/list/List.vue";
import ListDetail from "../views/list/ListDetail.vue";

// 配置路由
const routes = [
    { path: "/", redirect: 'home', },
    { path: "/login", component: Login, name: "login" },
    { path: "/home", component: Home, name: "home" },
    {
        path: "/list",
        component: Container,
        redirect: 'list',
        children: [
            {
                path: "/list",
                component: List,
                name: "list"
            },
            {
                path: "detail/:bid",
                component: ListDetail,
                name: "detail"
            },
        ]
    },
    { path: "/user", component: User, name: "user" },
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router;