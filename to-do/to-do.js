const fs = require("fs");

let list = [];

const saveDB = () => {
    let data = JSON.stringify(list);
    fs.writeFile(`db/data.json`, data, e => {
        if (e) {
            throw new Error("No se pudo crear la tarea");
        } else {
            console.log(`La tarea fué agregada a data.json`);
        }
    });
};

const actDB = () => {
    try {
        list = require("../db/data.json");
    }catch (e) {
        lis = []
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

    // return task;
};

module.exports = {
    crear
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



