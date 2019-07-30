const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
/*librerias nativas de node, otras(express por ej), y ./ estos son los propios que hacemos. */
//let  base = '3';
//console.log(proces.argv);
let comando = argv._[0];
switch(comando){
    case 'listar':
            listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(`archivo creado:${archivo}`)))
            .catch(err => console.log(err.red))
        break;
    default:
        'Comando no reconocido';
}
//console.log(argv);
/*

let parametro = argv[2];
let valor = parametro.split('=');
let base = valor[1];


*/