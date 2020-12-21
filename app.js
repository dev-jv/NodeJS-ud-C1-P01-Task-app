// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

// console.log(argv);

let comando = argv._[0];

switch( comando ) {
    case 'crear':
        console.log('Crea una tarea');
        break;

    case 'listar':
        console.log('Muestra todas las tareas pendientes');
        break;

    case 'actualizar':
        console.log('Actualiza el estado de una tarea');
        break;

    default:
        console.log('El comando no es reconocido');
}



