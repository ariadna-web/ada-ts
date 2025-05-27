/*Crea un archivo getPokemon.js.
2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener
información sobre el Pokémon "Bulbasaur".
3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la
consola.
Pistas:
• La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1.
• Los tipos de Pokémon se encuentran en types dentro de la respuesta.  */

async function fetchPokemon(id) {
    try{
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/1${id}`)
        if(!response.ok)throw new error('el poquemon no fue encontrado: ', response.status)
            const pokemon=await response.json()
        const name=pokemon.name;
        const types=pokemon.types.map(type=> type.type.name)
        console.log(`nombre ${name}`);
        console.log(`tipos ${types.join(', ')}`)
    }catch (error){
        console.error('error', error)
    }
}
fetchPokemon(1)