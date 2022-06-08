import Vue from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const constRouter:Array<RouteRecordRaw> = [
    // {
    //     path: '/path1',
    //     component: () => import('../components/HelloWorld.vue') ,
    // },
    // {
    //     path: '/path2',
    //     component: () => import('../components/HelloWorld2.vue') ,
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constRouter
})

export default router