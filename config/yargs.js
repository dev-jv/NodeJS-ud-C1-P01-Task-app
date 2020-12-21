const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        description: {
                demand: true,
                alias: 'd'
        }
    })
    .command('actualizar', 'Actualizar el estado de una tarea',{
        description: {
            demand: true,
            alias: 'd'
        },
        state: {
            demand: true,
            alias: 's',
            default: false
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};



