import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'
// 统一引入组件 改为按需引入
// import Container from "../views/Container.vue";
// import Layout from "../components/layout/Index.vue";
// import Login from "../views/acount/Login.vue";
// import Home from "../views/Home.vue";
// import User from "../views/User.vue";
// import List from "../views/list/List.vue";
// import ListDetail from "../views/list/ListDetail.vue";

// 配置路由
const routes = [
    { path: "/", redirect: 'home', },
    { path: "/login", component: () => import('../views/acount/Login.vue'), name: "login" },
    {
        path: "/index", component: () => import('../components/layout/Index.vue'), name: "layout", children: [
            { path: "/home", component: () => import('../views/Home.vue'), name: "home" },
            {
                path: "/list",
                component: () => import('../views/Container.vue'),
                redirect: 'list',
                children: [
                    {
                        path: "/list",
                        component: () => import('../views/list/List.vue'),
                        name: "list"
                    },
                    {
                        path: "detail/:bid",
                        component: () => import('../views/list/ListDetail.vue'),
                        name: "detail"
                    },
                ]
            },
            { path: "/user", component: () => import('../views/User.vue'), name: "user" },
        ]
    },
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !store.state.isLogin) {
        next({ name: 'login' })
    } else if (to.path === '/') {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router;