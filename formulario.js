const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

/*
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault(); //con esto evitamos que se siga recargando la pagina del formulario 
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
*/
// otra forma sin usar el event.preventDefault(event)
// pero cambiando en el html en el Form ponerle type='button'
// porque sino al ser un form por defecto lo cambia a type="submit"

btn.addEventListener('click', sumarInputValues);

function sumarInputValues() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
