<script setup lang="ts">
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import type { RouterLinks } from '@/router/list-routes';

    interface Props {
        title?: string,
        links: RouterLinks[],
        isSecondary?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        title: 'CompoApps',
        isSecondary: false
    })

    // const links  = toRef(props, 'links')
    const links = computed(() => props.links.filter(link => link.visible ))
</script>

<template>
    <nav>
        <template v-if="!$props.isSecondary">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="15" />
    
            <!-- <span v-if="$props.title">{{ $props.title }}</span> -->
            <span >{{ $props.title }}</span>
        </template>

        <RouterLink
            v-for="link of links"
            :key="link.path"
            :to="link.path"

        >
            {{ link.title }}
        </RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        align-items: flex-start;
        display: flex;
        font-size: 12px;
        margin-top: 10px;
        text-align: center;
        width: 100%;
    }

    img {
        margin-right: 5px;
    }

    span {
        margin-right: 10px;
    }

    a {
        margin-right: 5px;
    }

    nav a.router-link-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:after-of-type {
        border: 0
    }
</style>