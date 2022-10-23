
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('./config/yargs');


//Crea archivos txt

console.clear();

//Imprimir tablas

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.green, 'Creado') )
    .catch( err => console.log(err) );
    