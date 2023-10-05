<script setup lang="ts">
    import { usePokemon } from '../composables/usePokemon';
    import PokemonCardList from '../components/PokemonCardList.vue';

    const { count, isLoading, pokemon, isError, error } = usePokemon()
    
</script>

<template>
    <h3 v-if="isLoading">
        Loading...
    </h3>

    <div v-else-if="isError">
        {{ error }}
    </div>

    <div v-else>
        <h1>Pokemon list {{ count }}</h1>

        <PokemonCardList 
            :pokemons="pokemon ?? []"
        />
    </div>
</template>