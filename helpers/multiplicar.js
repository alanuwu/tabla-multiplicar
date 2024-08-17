const fs = require('fs');
let colors = require('colors');

const base = 5;
let salida, consola = '';

const crearArchivo = async(base, listar=false, times=10) => {
    console.clear();

    for (let i = 1; i <= times; i++) {
		
        salida += (`${base} x ${i} = ${base*i} \n`);
        consola += (`${base} x ${i} = ${base*i} \n`).green;
    }
	
	let nombreArchivo = `./salidas/tabla-${base}.txt`;
	if(listar) {
    console.log("==================".blue);
    console.log(`Tabla del ${base}`.red);
    console.log("==================".blue);
	console.log(consola);
	}
	try{
    fs.writeFileSync(nombreArchivo, salida);
	return nombreArchivo;
	}catch(e){
		return `${nombreArchivo} no ha podido ser creado!`;
	}
}

module.exports = {
    crearArchivo
}