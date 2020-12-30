const argv = require("../config/yargs").argv;
const colors = require('colors');
const fs = require("fs");

let comando = argv._[0];
let list = [];

const saveDB = () => {
    let data = JSON.stringify(list);
    fs.writeFile(`db/data.json`, data, e => {
        if (e) {
            throw new Error("No se pudo crear la tarea".red);
        } else {
            switch (comando) {
                case "crear":
                    console.log(`<> La tarea fue agregada a la lista de pendientes!`.blue);
                    break;
                case "actualizar":
                    console.log(`<> La tarea fue actualizada correctamente!`.blue);
                    break;
            }
        }
    });
};

const actDB = () => {
    try {
        list = require("../db/data.json");
    }catch (e) {
        list = []
    }
};

const crear = description => {
    actDB();

    let task = {
        description,
        state: false
    };

    list.push(task);
    saveDB();
    return task;
};

const getList = () => {
    actDB();
    return list;
};

const actualizar = (description, state = true) => {
    actDB();

    let index = list.findIndex( task => {
        return task.description === description;
    });

    if(index >= 0){
        list[index].state = state;
        saveDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    getList,
    actualizar
};

// ------------------------------------------------ <> with Promise

// const fs = require('fs');
//
// let list = [];
//
// const saveDB = () => {
//     let data = JSON.stringify(list);
//
//     return new Promise((resolve, reject) => {
//         fs.writeFile(`db/data.json`, data, e => {
//             if(e){
//                 reject(new Error('No se pudo crear la tarea'));
//             }else{
//                 resolve(`La tarea fué agregada a data.json`);
//             }
//         });
//     });
// };
//
// const actDB = () => {
//     try {
//         list = require("../db/data.json");
//     }catch (e) {
//         lis = []
//     }
// };
//
// const crear = description => {
//     actDB();
//
//     let task = {
//         description,
//         state: false
//     };
//
//     list.push(task);
//
//     saveDB();
//
//     return saveDB();
// };
//
// module.exports = {
//     crear
// };



