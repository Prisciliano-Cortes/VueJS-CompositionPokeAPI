import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons'

export const pokemonRoutes: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ROUTE_NAME}/list`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        {
            path: `/${ROUTE_NAME}/list`,
            props: { title: 'Pokemon List', visible: true },
            name: 'pokemon-list',
            component: () => import('@/pokemons/pages/PokemonList.vue')
        },
        {
            path: `/${ROUTE_NAME}/list-native`,
            props: { title: 'Pokemon List Native', visible: true },
            name: 'pokemon-list-native',
            component: () => import('@/pokemons/pages/PokemonListNative.vue')
        },
        {
            path: `/${ROUTE_NAME}/search`,
            props: { title: 'Pokemon Search', visible: true },
            name: 'pokemon-search',
            component: () => import('@/pokemons/pages/PokemonSearch.vue')
        },
        {
            path: `/${ROUTE_NAME}/by/:id`,
            props: { title: 'Pokemon ID', visible: false },
            name: 'pokemon-id',
            component: () => import('@/pokemons/pages/PokemonById.vue')
        }
    ]
}