const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'application/json'});
    let salida = {
        nombre:'Juan',
        apellido:'lamasi'
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('escuchando 8080');