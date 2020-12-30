const colors = require('colors');
const fs = require("fs");

let list = [];

const saveDB = () => {
    let data = JSON.stringify(list);
    fs.writeFile(`db/data.json`, data, e => {
        if(e){
            throw new Error('No se pudo guardar');
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
        state: 'pending'
    };

    list.push(task);
    saveDB();
    // return ` # La tarea fue agregada a la lista de pendientes!`.blue;
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
        return ` # La tarea fue actualizada correctamente!`.blue;
    } else {
        return ` # No se pudo actualizar la tarea!`.red;
    }
};

const eliminar = (description) => {
    actDB();

    let newlist = list.filter(e => e.description !== description);

    if(list.length === newlist.length){
        return ` # No se pudo eliminar la tarea!`.red;
    } else {
        list = newlist;
        saveDB();
        return ` # La tarea se eliminó corectamente!`.blue;
    }
};

module.exports = {
    crear,
    getList,
    actualizar,
    eliminar
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



