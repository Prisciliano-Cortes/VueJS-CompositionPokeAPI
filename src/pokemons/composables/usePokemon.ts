import { computed, watchEffect } from 'vue';
import { useQuery } from '@tanstack/vue-query'
import { getPokemon } from "../helpers/get-pokemon"
import { initialPokemons } from '../data/initial-pokemons';

export const usePokemon = () => {
    
    const { isLoading, data:pokemon, isError, error } = useQuery(
        ['pokemon'],
        getPokemon,
        {
            retry: 1,
            initialData: initialPokemons
        }
    )

    watchEffect(() => {

    })

    const count = computed(() => {
        return pokemon.value?.length ?? 0
    })

    return {
       isLoading,
       isError,
       error,
       pokemon,
       count
    }
}

