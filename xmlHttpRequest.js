let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api/?results=1');
xhr.send();
// GET --> Obtener información
// POST --> Publicar o enviar información

xhr.onload = function() {
    if(xhr.status != 200){
        console.log(`Error ${xhr.status}`);
    }else{
        console.log(`Respuesta ${xhr.response}`);
    }
};