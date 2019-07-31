const axios = require('axios');


const getLugar = async (dir) => {
    
    const encodeUtl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: {'x-rapidapi-key': '0412cf4ea5msh7e86655ef669aa8p15e164jsnceb90618eb0c'}
    });
    
    try{

    
    const respuesta = await instance.get(); 
    if(respuesta.data.Results.length === 0){
        throw new Error(`No se encontro la direccion ${dir}`);
    }else{
        let data = respuesta.data.Results[0];
        let direccion = data.name;
        let lat = data.lat;
        let lon = data.lon;

        return{
            direccion,
            lat,
            lon
        }
    }
    }catch(e){
        throw new Error( `No se encontro la direccion ${dir}`);
    }
}
module.exports = {getLugar}