/** @format */

// 06-callbacks.js
const fs = require("fs"); // file system
const path = require("path");
// 06-ejemplo.txt -> Hola
console.log("PRIMERO");
fs.readFile(
  path.join(__dirname, "06-ejemplo.txt"), // 1
  "utf-8",
  (error, contenido) => {
    if (error) {
      console.error({
        mensaje: "error leyendo contenido 06 ejemplo txt",
        error: error,
      });
    } else {
      fs.readFile(
        path.join(__dirname, "01-variables.js"), // 2
        "utf-8",
        (errorVariable, contenidoVariable) => {
          if (errorVariable) {
            console.error({
              mensaje: "error leyendo contenido 01 variable",
              error: errorVariable,
            });
          } else {
            console.log(contenido, contenidoVariable);
          }
        }
      );
    }
  }
);
console.log("TERCERO");
