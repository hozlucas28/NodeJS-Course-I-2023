/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El módulo "http" me permite realizar diversas operaciones sobre
 *         el protocolo http, una de estas es crear y levantar un servidor.
 *
 *
 * IMPORTANTE:
 *  			  - Si el puerto es "0", entonces se le asignara al servidor
 *                  uno de los puertos que no estén ocupados.
-------------------------------------------------------------------------- */

const { createServer } = require('node:http')

// Crear servidor
const server = createServer((req, res) => {
	console.log('Solicitud recibida')
	res.end('!Hola Mundo¡') // Respuesta de salida.
})

// Levantar servidor
server.listen(0, () => {
	console.log(`Servidor funcionando en el puerto ${server.address().port}`)
})
