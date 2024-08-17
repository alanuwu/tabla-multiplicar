const argv = require('yargs')
	.option('b',{
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar'
		
	})
	.option('l', {
		alias: 'list',
		type: 'boolean',
		demandOption: false,
		describe: 'Listar tabla. '
	})
	.option('t',{
		alias: 'times',
		type: 'number',
		demandOption: false,
		describe: 'Limite de la tabla'
	})
	.check( (argv, options) => {
		if(isNaN(argv.b)){
			throw 'La base tiene que ser un numero';
		}
		return true;
	} )
	.argv;
	
module.exports = argv;