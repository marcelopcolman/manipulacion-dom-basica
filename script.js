const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// Para cambiar el Title por ej:
h1.innerHTML='Patito <br> Feo';
h1.innerText='Patito <br> Feo'; //sse utiliza para proteccion de hackers (investigarlo luego)

/* para modificar los atributos tenemos lo siguiente:
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');
console.log(h1.getAttribute('class'));
*/

// para agregar una clase tenemos lo siguiente:
h1.classList.add('azul');
h1.classList.remove('verde'); //eliminamos todos los verde que haya en las clases
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// Vamos a modificar el value de nuestro input
input.value = '456';
//todo lo que vimos es para modificar lo que ya tenemos en html, ahora para crear un "elemento desde cero" hacemos:
console.log(document.createElement('img'));
console.log(document.createElement('span'));

//vamos a crear una imagen, darle un atributo y agregarla a otro elemento ya existente
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
pid.append(img); //como usamos append no borra el contenido que tenia
pid.innerHTML="";
pid.append(img);
