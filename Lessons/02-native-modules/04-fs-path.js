const { join } = require('node:path')
const { readdir } = require('node:fs')

const folder = process.argv[2] ?? '.' // Obtener argumento del commandline.

// Obtener y mostrar ficheros en el directorio (argumento del commandline)
readdir(folder, (error, files) => {
	error && console.error(error)

	files.forEach((file) => {
		const filePath = join(folder, file)
		console.log(filePath)
	})
})
