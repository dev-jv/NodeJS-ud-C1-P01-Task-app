
const description = {
    demand: true,
    alias: 'd',
    desc: 'Define la tarea'
};

const state = {
    demand: true,
    alias: 's',
    default: 'complete',
    desc: 'Estado de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        description
    })
    .command('actualizar', 'Actualizar el estado de una tarea',{
        description,
        state
    })
    .command('eliminar', 'Eliminar una tarea', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
};



