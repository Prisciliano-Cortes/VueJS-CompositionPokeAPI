<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { usePoke } from '../composables/usePoke';
    import { useQueryClient } from '@tanstack/vue-query';

    const route = useRoute()
    const queryClient = useQueryClient()

    const { id } = route.params

    const { isLoading, isError, poke, errorMessage } = usePoke(id.toString())

    const invalidateQuery = () => {
        queryClient.invalidateQueries(['poke', id])
    }
</script>

<template>

    <button @click="invalidateQuery">
        Invalidate query
    </button>

    <h3 v-if="isLoading">
        Loading...
    </h3>

    <div v-else-if="isError">
        {{ errorMessage }}
    </div>

    <div v-else-if="poke">
        <h1>{{ poke.name }}</h1>

        <div class="character-container">
            <img :src="poke.frontSprite" :alt="poke.name" />
        </div>  
    </div>
</template>