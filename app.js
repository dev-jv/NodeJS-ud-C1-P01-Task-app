const argv = require("./config/yargs").argv;

const {crear} = require("./to-do/to-do");

let comando = argv._[0];

switch (comando) {
    case "crear":
        // console.log('Crea una tarea');
        crear(argv.description);
        break;

    case "listar":
        console.log("Muestra todas las tareas pendientes");
        break;

    case "actualizar":
        console.log("Actualiza el estado de una tarea");
        break;

    default:
        console.log("El comando no es reconocido");
}

// ------------------------------------------------ <> with Promise

// // const argv = require('yargs').argv;
// const argv = require('./config/yargs').argv;
//
// const {crear} = require('./to-do/to-do');
//
// let comando = argv._[0];
//
// switch( comando ) {
//     case 'crear':
//         // console.log('Crea una tarea');
//         crear(argv.description)
//             .then(res => console.log(res))
//             .catch(e => console.log(e));
//         break;
//
//     case 'listar':
//         console.log('Muestra todas las tareas pendientes');
//         break;
//
//     case 'actualizar':
//         console.log('Actualiza el estado de una tarea');
//         break;
//
//     default:
//         console.log('El comando no es reconocido');
// }



