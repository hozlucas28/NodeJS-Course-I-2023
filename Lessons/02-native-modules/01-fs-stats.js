/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El módulo nativo "fs" me permite obtener datos del fichero/archivo.
 *
 *
 * IMPORTANTE:
 *  			  - NodeJS recomienda referenciar el path de los módulos
 *                  nativos con la nomenclatura: "node:<módulo>".
-------------------------------------------------------------------------- */

const { statSync, readFileSync } = require('node:fs') // Importación del modulo nativo "fs".

// Propiedades del fichero
const stats = statSync('./file.txt')
console.log('¿Es un archivo?', stats.isFile())
console.log('¿Es un directorio?', stats.isDirectory())
console.log('¿Es un link simbólico?', stats.isSymbolicLink())
console.log('Tamaño del fichero:', stats.size)

// Lectura síncrona del fichero
const text = readFileSync('./file.txt', 'utf-8')
console.log(text)
