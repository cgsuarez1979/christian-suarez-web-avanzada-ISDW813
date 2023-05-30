/** @format */

// 03-operadores.js
const products = [
  {
    id: 1,
    name: "CPU",
    price: 250,
  },
  {
    id: 2,
    name: "Mouse",
    price: 12,
  },
  {
    id: 3,
    name: "Screen",
    price: 140,
  },
];

// FUNCIONES COMO PARAMETROS
// FIND
// enviamos una expresion -> TRUTY FALSY
// devuelve el primero que cumpla esa condicion
const respuestaFind = products.find(function (
  valorActual,
  indiceActual,
  arregloCompleto
) {
  console.log("valorActual", valorActual);
  console.log("indiceActual", indiceActual);
  console.log("arregloCompleto", arregloCompleto);
  return valorActual.name === "CPU"; // EXPRESION = = =
});
console.log("respuestaFind", respuestaFind); // CPU // Si no encuentra devuelve undefined

// FINDINDEX
// enviamos una expresion -> TRUTY FALSY
// devuelve el primero que cumpla esa condicion
const respuestaIndex = products.findIndex(function (
  valorActual,
  indiceActual,
  arregloCompleto
) {
  return valorActual.name === "CPU";
});
console.log("respuestaIndex", respuestaIndex); // indice -> 6 // No encuentra -> -1

// for (let i; i>arreglo.length; i--){
//     console.log('valorActual', arreglo[i]);
// }
// FOREACH
// itera el arreglo
const respuestaForEach = products.forEach(function (
  valorActual,
  indiceActual,
  productsCompleto
) {
  console.log("valorActual", valorActual);
});
console.log("respuestaForEach", respuestaForEach); // undefined

// MAP (Modificar o MUTAR el products y devuelve un nuevo products
// enviamos los datos del nuevo products
// devuelve el nuevo products
const respuestaMap = products.map(
  (valorActual, indiceActual, arregloCompleto) => {
    const nuevoElemento = {
      id: valorActual.id,
      name: valorActual.name,
      price: valorActual.price + 1,
    };
    return nuevoElemento;
  }
);
console.log("respuestaMap", respuestaMap);
console.log("products", products);

// FILTER (filtrar el products)
// enviamos EXPRESION TRUTY FALSY
// devuelve los elementos que cumplen esa condicion

const respuestaFilter = products.filter(
  (valorActual, indiceActual, arregloCompleto) => {
    return valorActual.price >= 50;
  }
);
console.log("respuestaFilter", respuestaFilter);
console.log("products", products);

// SOME -> expresion
// DEVUELVE BOOLEANO
// Hay ALGUN precio menor a 100? SI NO
// OR
const respuestaSome = products.some(function (
  valorActual,
  indiceActual,
  arregloCompleto
) {
  return valorActual.nota < 100;
});
console.log("respuestaSome", respuestaSome);

// EVERY -> expresion
// DEVUELVE BOOLEANO
// TODAS las precios son mayores a 100? SI NO
// AND
const respuestaEvery = products.every(function (
  valorActual,
  indiceActual,
  arregloCompleto
) {
  return valorActual.price > 100;
});
console.log("respuestaEvery", respuestaEvery);

// REDUCE           izq -> der
// REDUCE RIGHT     der -> izq
// 100 <3 Puntos de vida
// 100 -1 -2 -3 -5 -6 -5 -4 -3 -1 =
// 0 1 + 2 + 3 + 4 + 6 + 5 + 4 + 3 + 1 =

// [1,2,3,5,6,5,4,3,1]
const respuestaReduce = products.reduce(
  function (valorAcumulado, valorActual, indice, products) {
    return valorAcumulado + valorActual.price;
  },
  100 // Acumulador
);
console.log("respuestaReduce", respuestaReduce); // 100 - X = -46

// TODAS las notas son mayores a 14? SI NO
// AND
