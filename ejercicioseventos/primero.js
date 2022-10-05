const titulo = document.querySelector("#titulo");
const copiarTexto = document.querySelector("#input");

titulo.addEventListener("click",clickTitulo);
copiarTexto.addEventListener("copy", copiar);



function clickTitulo(){
    console.log("El usuario hizo click en el titulo");
}

function copiar(){
    console.log("Has hecho una copia");
}

