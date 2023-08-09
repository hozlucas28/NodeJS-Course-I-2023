/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los módulos de terceros se descargan desde un gestor de paquetes
 *         de NodeJS (por ejemplo NPM). Estos poseen diversas herramientas.
 *         En este ejemplo se utiliza el paquete "picocolors" que nos
 *         permite estilar textos, y utilizarlos en las salidas de
 *         la consola.
-------------------------------------------------------------------------- */

const picocolors = require('picocolors')

const text = picocolors.blue('¡Hola Mundo!')
console.log(text)
