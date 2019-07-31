const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc:'dir para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) =>{
    // try{
    //     let lugar = await lugar.getLugar(argv.direccion);
    //     let clima = await lugar.getClima(lugar.lat,lugar.lon);
    //     return `El clima de ${lugar.direccion} es de ${clima}`;

    // }catch(e){
    //     return `No de pudo determinar el clima de ${direccion}`;
    // }
    return new Promise( (resolve, reject) =>{
        lugar.getLugar(argv.direccion)
        .then(result => {
            if(result){
                console.log('a');
                clima.getClima(result.lat,result.lon)
                .then(resultClima => resolve(`El clima de ${result.direccion} es de ${resultClima}`))
                .catch(err => {console.log('b'); reject(new Error(err));})
            }
        })
        .catch(err => {console.log('c'); reject(new Error(err));})
    });
}

getInfo(argv.direccion).then(r => console.log(r)).catch(err => console.log("error"));

