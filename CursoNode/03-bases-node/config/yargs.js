const opts = {
    base: {
        demand:true,
        alias: 'b'
    },
    limite: {
        demand:true,
        default:10,
        alias: 'l'
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime la tabla multiplicar', opts)
    .command('crear', 'Crea la tabla multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}