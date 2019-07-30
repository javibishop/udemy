//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{
    if(!Number(base) || !Number(limite)){
        reject('No es un numero');
        return;
    }
        
    let data = '';
    for(let i = 1; i <= limite; i++){
        data += `${base} * ${i} = ${base*i} \n`;
    }
    console.log(data.green);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('No es un numero'.red);
            return;
        }
            
        let data = '';
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i} \n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err =>{
            if(err) 
                reject(err);
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            }
        );
    })
}


module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}