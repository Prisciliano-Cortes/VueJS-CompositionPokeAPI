import { createRouter, createWebHistory } from 'vue-router'
import { pokemonRoutes } from '../pokemons/router/index';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../shared/views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../shared/views/AboutView.vue')
        },
        {
            path: '/counter',
            name: 'counter',
            component: () => import('../counter/views/CounterView.vue')
        },
        {
            ...pokemonRoutes,
            path: '/pokemons',
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'home' })
        }
    ]
})

export default router
