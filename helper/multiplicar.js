const fs = require('fs');
let colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida, consola = '';
        
        for (let i = 1; i <= hasta; i++) {
        
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.cyan(base)} x ${colors.cyan(i)} = ${colors.green(base * i)}\n`;
        }

        if(listar){
            console.log('==========================='.rainbow);
            console.log(`Tabla del: ${colors.red(base)}`.cyan);
            console.log('==========================='.rainbow);
            
            console.log(consola);
        }
    
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`

    } catch (error) {
        throw error
    }

    

}

//Exporta la funcion para ocuparla en app.js
module.exports = {
    crearArchivo
}
