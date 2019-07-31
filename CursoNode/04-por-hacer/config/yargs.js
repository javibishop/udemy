const descripcion = {
    demand:true,
    alias: 'd',
    desc:'Desc de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {descripcion})
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            demand:true,
            alias: 'c',
            default:true
            }})
    .command('eliminar', 'eliminar una tarea', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
}