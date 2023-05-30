/** @format */

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
const texto = "Christian"; // string
const apellido = "Suarez"; // string
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
if ("Christian") {
  console.log("String con datos Es truty"); //!
} else {
  console.log("String con datos Falso");
}

if (-1) {
  console.log("Negativos Es truty"); //!
} else {
  console.log("Negativos Es Falso");
}
if (0) {
  console.log("Cero Es truty");
} else {
  console.log("Cero Es Falso"); //!
}
if (1) {
  console.log("Positivos Es truty"); //!
} else {
  console.log("Positivos Es Falso");
}

if (null) {
  console.log("Null Es truty");
} else {
  console.log("Null Es Falso"); // Falsy
}
if (undefined) {
  console.log("Undefined Es truty");
} else {
  console.log("Undefined Es Falso"); // Falsy
}
// Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos

const myself = {
  nombre: "Christian", // llave: valor,
  apellido: "Suarez",
  edad: 42,
  hijos: null,
  zapatos: undefined,
  casado: false,
  ropa: {
    color: "plomo",
    talla: "38",
  },
  mascotas: ["Luna", "Nube"],
};
// Acceder a las propiedades del objeto
myself.nombre; // "Christian"
myself.apellido; // 'Suarez'
myself["nombre"]; // "Chrstian"
console.log(myself);
myself.nombre = "Gonzalo";
console.log(myself);
myself["nombre"] = "Gonzalo";
myself.sueldo; // undefined
console.log(myself.sueldo);
myself.sueldo = 1.2;
console.log(myself.sueldo); // 1.2
myself["gastos"] = 0.8;
console.log(myself.gastos); // 0.8
myself.nombre = undefined;
console.log(myself);
console.log(Object.keys(myself));
console.log(Object.values(myself));
delete myself.nombre; // Eliminar la llave "nombre"
console.log(myself);

// Variables por valor o referencia?
// Variables por valor en JS son las primitivas: number, string, boolean
let myAge = 42;
let myAgeCopy = myAge; // Guardamos una primitiva en otra variable
// Variables por valor
console.log(myAge); // 42
console.log(myAgeCopy); // 42
myAgeCopy = myAgeCopy + 1;
console.log(myAgeCopy); // 43
console.log(myAge); // 42

// Variables por referencia: object ({},[])
let myOtherSelf = {
  nombre: "Christian",
};
let copyOfMyself = Object.assign({}, myOtherSelf);
console.log(copyOfMyself);
console.log(myOtherSelf);
copyOfMyself.nombre = "Gonzalo";
delete myOtherSelf.nombre;
console.log(myOtherSelf);
console.log(copyOfMyself);
let arregloNumeros = [1, 2, 3, 4, 5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);
