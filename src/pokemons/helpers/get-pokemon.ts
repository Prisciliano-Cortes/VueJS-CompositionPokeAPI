import pokemonApi from "../api/pokemonApi";
import type { PokemonListResponse, Pokemon, PokemonResponse } from "../interfaces";
import axios from 'axios';
import { sleep } from "./sleep";

export const getPokemon = async(): Promise<Pokemon[]> => {

    await sleep(4)

    const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

    const pokemonPromises: Promise<Pokemon>[] = []

    for (const { url } of data.results) {
        const pokemonPromise = axios.get<PokemonResponse>(url)
        .then( ({ data }) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default
            }
        })

        pokemonPromises.push( pokemonPromise )
    }

    const pokemon = await Promise.all( pokemonPromises )

    return pokemon
}