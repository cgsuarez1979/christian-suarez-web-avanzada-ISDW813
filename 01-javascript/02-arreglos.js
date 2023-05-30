/** @format */

// 02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Christian", "Suarez", undefined, null, {}, [1, 2]];
arreglo = [6, 7, 8, 9, 10];

// for of
for (let numero of arreglo) {
  // VALORES
  console.log("numero", numero);
}
// for in
for (let indice in arreglo) {
  // INDICES
  arreglo[indice];
  console.log("indice", indice);
}
let objetoPrueba = { a: "1", b: "2", c: "3" };
for (let llave in objetoPrueba) {
  // INDICES
  console.log("llave", llave);
}

arreglo.push(11); // Anadir al final un elemento
// [6, 7, 8, 9, 10, 11];
arreglo.pop(); // Eliminar al final un elemento
// [6, 7, 8, 9, 10];
arreglo.unshift(5); //  Anadir al principio del arreglo
// [5, 6, 7, 8, 9, 10];
console.log(arreglo);
// splice(indice, numero de elementos eliminados, ...items a agregar)
// EJ arreglo.splice(0,3,1,2,3,4,5,6;
arreglo.splice(0, 0, 4);
// [4, 5, 6, 7, 8, 9, 10];
console.log(arreglo);
const indiceNueve = arreglo.indexOf(9); // Encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueve, 2);
// [4, 5, 6, 7, 8];
console.log(arreglo);
