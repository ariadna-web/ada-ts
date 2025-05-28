/*Crea un archivo index.js.
2. Usando el método fetch en Node.js, realiza una solicitud a la API de Rick
and Morty.
3. Extrae el nombre del primer personaje de la respuesta y muéstralo en la
consola.
Pistas:
• Usa fetch(url) para hacer la solicitud y .then(response => response.json())
para procesar el JSON.
• Accede a results[0].name para obtener el nombre del primer personaje.  */
async function fetchCharacter() {
    try{
        const response =await fetch('https://rickandmortyapi.com/api/character')
        
         const character= await response.json()

         const characterName=character.results[0].name
        console.log('datos del personaje', characterName)
    }catch(error){
        console.error('error', error)
    }
}
fetchCharacter()