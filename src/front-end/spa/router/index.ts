import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },

        {
            path: '/sobre',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: '/contato',
            name: 'contact',
            component: () => import('@/views/ContactView.vue'),
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/NotFoundView.vue'),
        },
    ],
})

export default router
