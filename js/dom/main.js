var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

//primeraCaja.textContent = 'Hola mundo';
//primeraCaja.innerHTML = '<u>Hola mundo</u>';

//---- CREANDO NODOS

//1.- CREAR UN NODO
var caja = document.createElement('div');

//2.- CREAR UN NODO DE TEXTO
var contenido = document.createTextNode('Hola Mundo');

//3.- AÑADIR EL NODO DE TEXTO AL ELEMENTO
caja.appendChild(contenido);

//4.- AGREGAR ATRIBUTOS A LAS CAJAS
caja.setAttribute('class', 'caja naranja');

//5:- AFREFAR EL ELEMENTO AL DOCUMENTO
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//----- MODIFICANDO LAS CLASES O ID DE UN ELEMENTO
caja.id = 'primera';
caja.className = 'caja naranja';

//---- CONTENIENDO EL ELEMENTO PADRE
var padre = cajas[0].parentNode;

//insertBefore no sirve para pener un elemento antes de otro (elementoQueQueremosCrear, antesDeQueElemento);
padre.insertBefore(caja, primeraCaja);

// esto nos permite reemplazar un elemento por otro parametros = (elemento por el que queremos reemplazar, elemento que queremos reemplzar)
padre.replaceChild(caja, cajas[2]);

//para eliminar elementos y como parametro ponemos el elemento que queremos eliminar
padre.removeChild(cajas[0]);