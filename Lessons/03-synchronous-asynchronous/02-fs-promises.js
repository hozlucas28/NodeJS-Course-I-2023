/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Las promesas me permiten ejecutar callbacks a través de la
 *         instrucción "then()".
 *
 *
 * IMPORTANTE:
 *  			  - <promisify> = Me permite generar la version con promesas
 *                                de la función enviada como argumento.
-------------------------------------------------------------------------- */

const { readFile } = require('node:fs/promises')
// const { promisify } = require('node:util')

// Promesa unitaria
readFile('./file-01.txt', 'utf-8').then((file, error) => {
	console.log(`Promersa unitaria: ${file}`)
	error && console.error(error)
})

console.log('... *Operaciones que se realizan mientras se lee asincrónicamente el archivo "file-01.txt"* ...')

// Promesas en paralelo
Promise.all([readFile('./file-01.txt', 'utf-8'), readFile('./file-02.txt', 'utf-8')]).then(([firstFile, secondFile]) => {
	console.log(`Promesas en paralelo (primera): ${firstFile}`)
	console.log(`Promesas en paralelo (segunda): ${secondFile}`)
})

console.log(
	'... *Operaciones que se realizan mientras se lee asincrónicamente el paralelo los archivos "file-01.txt" y "file-02.txt"* ...'
)
