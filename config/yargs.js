const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Define la tarea'
        }
    })
    .command('actualizar', 'Actualizar el estado de una tarea',{
        description: {
            demand: true,
            alias: 'd',
            desc: 'Define la tarea'
        },
        state: {
            demand: true,
            alias: 's',
            default: 'complete',
            desc: 'Actualiza el estado de la tarea'
        }
    })
    .command('eliminar', 'Eliminar una tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Elimina la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};



