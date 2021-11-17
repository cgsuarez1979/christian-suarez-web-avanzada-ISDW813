// 01-javascript/
//              / 01-variables.js
// Mutables e Inmutables

// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
// Vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Adrian"; // string
const apellido = 'Eguez'; // string
const booleanooo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN

// Truty Falsy
if (true == true) {
    console.log("Es verdadero"); //!
} else {
    console.log("Es Falso");
}

if (true == false) {
    console.log("Es verdadero");
} else {
    console.log("Es Falso"); //!
}

if ("") {
    console.log("String vacio Es verdadero");
} else {
    console.log("String vacio Es Falsy"); //!
}
if ("Adrian") {
    console.log("String con datos Es truty"); //!
} else {
    console.log("String con datos Falso");
}

if(-1){
    console.log("Negativos Es truty");//!
}else{
    console.log("Negativos Es Falso");
}
if(0){
    console.log("Cero Es truty");
}else{
    console.log("Cero Es Falso");//!
}
if(1){
    console.log("Positivos Es truty");//!
}else{
    console.log("Positivos Es Falso");
}

if(null){
    console.log("Null Es truty");
}else{
    console.log("Null Es Falso"); // Falsy
}
if(undefined){
    console.log("Undefined Es truty");
}else{
    console.log("Undefined Es Falso");  // Falsy
}
// Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos

const adrian = {
    nombre: "Adrian", // llave: valor,
    false: 'Eguez',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda'],
};



