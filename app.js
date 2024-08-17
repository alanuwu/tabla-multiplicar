const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./helpers/yargs');

crearArchivo(argv.b, argv.l,argv.t)
.then(nombreArchivo => console.log(`${nombreArchivo} creado`.rainbow))
.catch(e => console.log(e));