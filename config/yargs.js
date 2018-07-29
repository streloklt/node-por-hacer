const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Nombre Tarea'
};

const completado = {
    alias: 'c',
    default: 'true',
    desc: 'Estado Tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una Tarea', {
        descripcion
    })
    .command('listar', 'Lista las Tareas', {
        completado
    })
    .command('actualizar', 'Actualiza el Estado de una Tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una Tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}