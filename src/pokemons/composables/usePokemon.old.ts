import { ref, computed, onMounted } from 'vue';
import type { Pokemon } from "../interfaces";
import { getPokemon } from "../helpers/get-pokemon"

const pokemon = ref<Pokemon[]>([])
const isLoading = ref(true)

export const usePokemon = () => {
    // if (pokemon.value.length === 0) {
    //     getPokemon().then( data => {
    //         pokemon.value = data
    //         isLoading.value = false
    //     })
    // }

    onMounted( async() => {
        await loadPokemon()
    })

    const loadPokemon = async() => {
        const data = await getPokemon()
        pokemon.value = data
        isLoading.value = false
    }

    const count = computed(() => {
        return pokemon.value.length
    })

    return {
        pokemon,
        isLoading,
        count
    }
}