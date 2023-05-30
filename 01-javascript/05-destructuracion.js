/** @format */

// 05-destructuracion.js

// Destructuracion de objetos
const mySelf = {
  nombre: "Christian",
};
const otherSelf = {
  nombre: "Gonzalo",
  apellido: "Cobos",
};
const mySelfComplete = {
  // Creando una nueva referencia
  ...otherSelf, // 1 El orden es importante para propiedades que se repiten
  ...mySelf, // 2 El ultimo reemplaza a los anteriores
};
console.log("mySelfComplete", mySelfComplete);

// Destructuracion de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
  ...arregloUno, // El orden importa
  ...arregloDos,
];
console.log("superArreglo", superArreglo);
console.log(...superArreglo); // console.log(1,2,3,4,5...,10);
