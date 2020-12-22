const fs = require('fs');

let list = [];

const crear = (description) => {
    let task = {
        description,
        state: false
    };
    list.push(task);

    let data = JSON.stringify(list);

    return new Promise ((resolve, reject) => {
        if (description.length < 10) {
            reject(`La descripción debe contener mas de 10 letras`);
            return;
        }

        fs.writeFile(`db/data.json`, data, (e) => {
            if(e){
                reject(new Error('No se pudo crear la tarea'));
            }else{
                resolve(`La tarea fué agregada a data.json`);
            }
        })
    })
};

module.exports = {
    crear
};



