const argv = require("./config/yargs").argv;
const colors = require('colors');
const {crear, getList} = require("./to-do/to-do");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tsk = crear(argv.description);
        console.log(tsk);
        break;

    case "listar":
        // console.log("Muestra todas las tareas pendientes");
        let gls = getList();

        for(let tk of gls) {
            console.log(' ----------------------- // ---- '.blue);
            console.log('Task: '.blue, tk.description.gray);
            console.log('State: '.blue, tk.state);
        }
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



