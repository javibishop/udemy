const fs = require('fs');


let listadoPorHacer = [];

let guardarDb = () =>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, err => console.log(err));
}

let cargarDB = () => {
    try {
        //al ser .json ya sabe que es un dato con formato json.
        listadoPorHacer = require('../db/data.json');
        //console.log(listadoPorHacer);    
    } catch (error) {
        listadoPorHacer = [];
    }
    
}
let crear = (descripcion) => {
    cargarDB();
    let porHacer= {
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

let actualizar = (descripcion, completado = true) => {
    cargarDB();
    let tareaIndice = listadoPorHacer.findIndex(l => l.descripcion === descripcion);
    if(tareaIndice >= 0){
        listadoPorHacer[tareaIndice].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}

let eliminar = (descripcion) =>{
    cargarDB();
    let tareaIndice = listadoPorHacer.findIndex(l => l.descripcion === descripcion);
    if(tareaIndice >= 0){
        listadoPorHacer.splice(tareaIndice, 1);
        //o con filter, te devuelve un nuevo objeto sin el filtrado
        guardarDb();
        return true;
    }else{
        return false;
    }
}
module.exports = {crear, getListado, actualizar, eliminar}