/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El módulo nativo "path" me permite operar sobre rutas del sistema
 *         operativo (SO).
 *
 *
 * IMPORTANTE:
 *  			  - <sep> = Me permite obtener el separador de rutas del SO.
 *  			  - <join> = Concatena strings formando una ruta (path).
 *  			  - <basename> = Devuelve el endpoint de una ruta (path).
 *  			  - <extname> = Retorna la extensión de un fichero/archivo.
-------------------------------------------------------------------------- */

const { sep, join, basename, extname } = require('node:path')

console.log(sep)

const filePath = join('content', 'workspace', 'file.txt')
console.log(filePath)

const baseName = basename(filePath)
console.log(baseName)

const baseNameWithoutExtension = basename(filePath, '.txt')
console.log(baseNameWithoutExtension)

const extension = extname('file.temp.txt')
console.log(extension)
