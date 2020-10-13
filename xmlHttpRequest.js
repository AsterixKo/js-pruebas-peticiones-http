let xhr = new XMLHttpRequest();

const urlOtraApi = 'https://swapi.dev/api/';
const urlApiRickyMorty = 'https://rickandmortyapi.com/api/'
const pokeapi = 'https://pokeapi.co/api/v2/pokemon/ditto';
xhr.open('GET', 'https://randomuser.me/api/?results=1');
xhr.send();
// GET --> Obtener información
// POST --> Publicar o enviar información

xhr.onload = function() {
    if(xhr.status != 200){
        console.log(`Ha ocurrido un error con codigo ${xhr.status} y mensaje ${xhr.statusText}`);
    }else{
        console.log(`Respuesta ${xhr.response}`);
        const parseResponse = JSON.parse(xhr.response);
        console.log('Respuesta parseada:', parseResponse);
    }
};

//esto es un objeto, no JSON. Necesitamos convertir el JSON
const ferrari = {
    marca: 'Ferrari',
    anio: 2020,
    color: 'Rojo'
};