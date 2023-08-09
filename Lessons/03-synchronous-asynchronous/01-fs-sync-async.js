/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los procesos sincrónicos bloquean la cola de ejecución evitando
 *         que otras instrucciones se ejecuten. Mientras que los procesos
 *         asincrónicos no generan bloque alguno.
 *
 *
 * IMPORTANTE:
 *                - Callbacks = Funciones que se ejecutan cuando se termina
 *                              el proceso asincrónico.
-------------------------------------------------------------------------- */

const { readFile, readFileSync } = require('node:fs')

// Lectura sincrónica
const text = readFileSync('./file-01.txt', 'utf-8')
console.log(text)

// Lectura asincrónica (con Callback)
readFile('./file-02.txt', 'utf-8', (error, file) => {
	console.log(file)
	error && console.error(error)
})

console.log('... *Operaciones que se realizan mientras se lee asincrónicamente el archivo "file-02.txt"* ...')
