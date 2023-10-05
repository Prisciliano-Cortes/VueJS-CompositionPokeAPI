import { reactive } from "vue";
import type { Pokemon } from "@/pokemons/interfaces"

interface Store {
    //*** State */
    pokemons: {
        list: Pokemon[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage?: string;
    },

    //*** Actions */
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: ( data: Pokemon[] ) => void;
    loadPokemonsFail: ( error: string ) => void;
}

const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: undefined
    },
    startLoadingPokemons: async function(): Promise<void> {
        // const pokemons = await getPokemon()
        // this.loadedPokemons(pokemons)
        this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            hasError: false,
            errorMessage: undefined
        }
    },
    loadedPokemons: function (data: Pokemon[]): void {
        this.pokemons = {
            list: data,
            count: data.length,
            isLoading: false,
            hasError: false,
            errorMessage: undefined
        }
    },
    loadPokemonsFail: function (error: string): void {
        this.pokemons = {
            ...this.pokemons,
            isLoading: false,
            hasError: true,
            errorMessage: error
        }
    }
})

export default store