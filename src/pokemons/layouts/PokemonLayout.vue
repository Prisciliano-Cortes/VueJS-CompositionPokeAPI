<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import NavBar from '@/shared/components/NavBar.vue'
    import { pokemonRoutes } from '../router';
    import type { RouterLinks } from '../../router/list-routes';

    const routerLinks: RouterLinks[] = pokemonRoutes.children!.map( ({ name, path, props }) => {
        const { title, visible } = props as { title: string, visible: boolean }
        
        return {
            name: name?.toString() ?? '',
            path: path,
            title,
            visible,
        }
    }) || []
</script>

<template>
    <div>
        <NavBar :links="routerLinks" is-secondary />
        <!-- <h4>Pokemon Layout</h4> -->

        <RouterView />
        <!-- <Suspense>
            <RouterView />

            <template #fallback>
                Loading...
            </template>
        </Suspense> -->
    </div>
</template>
