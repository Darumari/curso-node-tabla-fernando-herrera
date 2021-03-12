const fs = require('fs');
const colors = require('colors');
const crearArchivoPromise = (base = 8, listar = false) => {
	return new Promise((resolve, reject) => {
		if (listar) {
			console.log('=============================='.green);
			console.log(`        Tabla del ${base}           `, colors.blue(base));
			console.log('=============================='.green);
		}
		let salida = '';

		for (let i = 1; i <= 10; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}
		if (listar) console.log(salida);

		fs.writeFileSync(`tabla-${base}.txt`, salida);

		resolve(`tabla-${base}.txt`);
	});
};

const crearArchivoAsync = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';

		for (let i = 1; i <= hasta; i++) {
			consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
			salida += `${base} x ${i} = ${base * i}\n`;
		}
		if (listar) {
			console.log('=============================='.green);
			console.log(
				'Tabla del:'.green,
				colors.blue(base),
				'desde el'.green,
				'1'.cyan,
				'hasta el'.green,
				colors.cyan(hasta)
			);
			console.log('=============================='.green);
			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivoAsync,
	crearArchivoPromise,
};
