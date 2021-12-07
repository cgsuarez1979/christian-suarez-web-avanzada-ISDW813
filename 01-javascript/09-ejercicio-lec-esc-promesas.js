// 09-ejercicio-lec-esc-promesas.js
const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODOO esto debe ser realizado con promesas
- Promesa de lectura
- Promesa de escritura
* */
function promesaLeerArchivo(path) {
    const leerArchivo = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoArchivoLeido) => {
                    if (error) {
                        console.error('Error leyendo archivo', error);
                        reject(error);
                    } else {
                        resolve(contenidoArchivoLeido);
                    }
                }
            );
        }
    );
    return leerArchivo
} // PROMESA!!!
function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    const escribirArchivo = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + '\n' + nuevoContenido,
                'utf-8',
                (error) => {
                    if (error) {
                        console.error('Error leyendo archivo', error);
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
    return escribirArchivo;
}
function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then( // archivo leido
            (contenidoArchivoActual) => {
                return promesaEscribirArchivo(
                    path,
                    contenidoArchivoActual,
                    nuevoContenido
                );
            }
        )
        .then(
            () => promesaLeerArchivo(path)
        )
        .then(
            (nuevoContenido) => {
                console.log('Nuevo Contenido', nuevoContenido);
            }
        )
        .catch(
            (error) => {
                consol.error(error)
            }
        );
}
ejercicio('./06-ejemplo.txt', 'Buenas mañanas');