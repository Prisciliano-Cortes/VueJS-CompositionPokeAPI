import { useQuery } from "@tanstack/vue-query"
import { getPokemonById } from "../helpers/get-pokemon-by-id"

export const usePoke = ( id: string ) => {

    const {isLoading, isError, data: poke, error} = useQuery(
        ['poke', id],
        () => getPokemonById(id)
    )

    return {
        isLoading,
        isError, 
        poke,
        errorMessage: error
    }
}