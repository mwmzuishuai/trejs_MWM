import { createMemoryHistory, createRouter } from 'vue-router'
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/base/base1.vue')
        },
        {
            path: '/base2',
            component: () => import('../views/base/base2.vue')
        },
        {
            path: '/base3',
            component: () => import('../views/base/base3.vue')
        },
        {
            path: '/base4',
            component: () => import('../views/base/base4.vue')
        },
        {
            path: '/base5',
            component: () => import('../views/base/base5.vue')
        },
        {
            path: '/base6',
            component: () => import('../views/base/base6.vue')
        },
        {
            path: '/base7',
            component: () => import('../views/base/base7.vue')
        },
        {
            path: '/material',
            children: [
                {
                    path: 'material1',
                    component: () => import('../views/material/material1.vue')
                },
                {
                    path: 'material2',
                    component: () => import('../views/material/material2.vue')
                },
                {
                    path: 'material3',
                    component: () => import('../views/material/material3.vue')
                },
                {
                    path: 'material4',
                    component: () => import('../views/material/material4.vue')
                },
                {
                    path: 'material5',
                    component: () => import('../views/material/material5.vue')
                },
                {
                    path: 'material6',
                    component: () => import('../views/material/material6.vue')
                },
                {
                    path: 'material7',
                    component: () => import('../views/material/material7.vue')
                },
                {
                    path: 'material8',
                    component: () => import('../views/material/material8.vue')
                },
                {
                    path: 'material9',
                    component: () => import('../views/material/material9.vue')
                },

            ]
        },

    ]
})
export default router