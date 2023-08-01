import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: () => import('../pages/Home.vue')
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import('../pages/About.vue')
        // },
        // {
        //     path: '/projects',
        //     name: 'projects',
        //     component: () => import('../pages/Projects.vue')
        // },
        // {
        //     path: '/articles',
        //     name: 'articles',
        //     component: () => import('../pages/Articles.vue')
        // },
    ],
    history: createWebHashHistory(),
});

export default router;