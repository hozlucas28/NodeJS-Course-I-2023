/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Como no se pueda utilizar await en el scope padre del archivo,
 *         al ser del tipo "common", recurrimos a una IFE.
-------------------------------------------------------------------------- */

const { readFile } = require('node:fs/promises')

// Lectura asincrónica secuencial
;(async () => {
	const text = await readFile('./file-01.txt', 'utf-8')
	console.log(text)
	console.log('Otras operaciones mientras se lee el archivo')
})()
