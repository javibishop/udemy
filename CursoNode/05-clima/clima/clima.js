const axios = require('axios');
const getClima = async (lat, lon) => {
    try{

    
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dcdcb5c3e9949209dbb77e843072f713`);

    return respuesta.data.main.temp;
    }
    catch(e){
        return "Error al obtener temperatura";
    }
}
module.exports = {getClima}