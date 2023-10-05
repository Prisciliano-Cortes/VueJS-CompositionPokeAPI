<script setup lang="ts">
    import store from '@/store/store';
    import PokemonCardList from '../components/PokemonCardList.vue';
    import { useQuery } from '@tanstack/vue-query';
    import { getPokemon } from '../helpers/get-pokemon';

    useQuery(
        ['pokemons'],
        getPokemon,
        {
            select( data ) {
                store.loadedPokemons( data )
            }
        }
    )
</script>

<template>
    <h3 v-if="store.pokemons.isLoading">
        Loading...
    </h3>

    <div v-else-if="store.pokemons.hasError">
        {{ store.pokemons.errorMessage }}
    </div>

    <div v-else>
        <h1>Pokemon list Native - {{ store.pokemons.count }}</h1>

        <PokemonCardList 
            :pokemons="store.pokemons.list"
        />
    </div>
</template>