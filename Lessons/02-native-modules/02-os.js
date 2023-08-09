/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El módulo nativo "os" me permite obtener datos del sistema
 *         operativo.
-------------------------------------------------------------------------- */

const { platform, release, arch, cpus, freemem, totalmem, uptime } = require('node:os') // Importación del modulo nativo "os".

console.log(`| -------- Sistema Operativo -------- |`)
console.log('Plataforma:', platform())
console.log('Versión:', release())
console.log('Arquitectura:', arch())
console.log('CPUs:', cpus())
console.log('Memoria libre:', freemem())
console.log('Memoria total:', totalmem())
console.log('Tiempo transcurrido desde el encendido (uptime):', uptime())
