require('colors');
const { crearArchivoAsync, crearArchivoPromise } = require('./helpers/multiplicar');

const argv = require('./config/yargs');
console.clear();

//	Argv de manera manual
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

crearArchivoAsync(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
	.catch((err) => console.log(err));
