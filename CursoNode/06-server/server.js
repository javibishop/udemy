const express = require('express');
const app = express();
const hbs = require('hbs');
//no lo asigna a una const ya que ese require pega el codigo del helper ahi
require('./hbs/helpers');

//para q funcione en herocu
const port = process.env.PORT || 3000;

/*middleware es un callback q se ejecuta siempre. */

//se pueden poner cualquier archivo, pero es publico.
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers


app.get('/', (req, res) =>{
    let salida = {
        nombre:'Juan',
        apellido:'lamasi'
    }
    // res.send(JSON.stringify(salida));
    //no hace falta hacer el stringify. ya lo resuelve express.
    //res.send(salida);
    res.render('home', {nombre: 'julito iglesias'});
});

app.get('/about', (req, res) =>{
    res.render('about');
});
app.listen(`${port}`, () =>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});