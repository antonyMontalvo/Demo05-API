const db = require('./database'),
    IndexModel = {};

// Web
IndexModel.getRoomsData = () => {
    return new Promise((resolve, reject) => {

        db.sequelize.query('CALL sp_get_rooms()',
            {
                raw: true,
            })
            .then((result) => {
                resolve(result)
            }).catch((err) => {
                reject(err)
            });
    });
}

// App
IndexModel.getReservationData = () => {
    return new Promise((resolve, reject) => {

        db.sequelize.query('CALL sp_get_reservations()',
            {
                raw: true,
            })
            .then((result) => {
                resolve(result)
            }).catch((err) => {
                reject(err)
            });
    });
}

// IndexModel.insertPerson = data => {
//     return new Promise((resolve, reject) => {

//         db.sequelize.query('CALL sp_insert_user(?,?,?,?,?,?,?)',
//             {
//                 raw: true,
//                 replacements: [
//                     data.name,
//                     data.lastname,
//                     data.dni,
//                     data.email,
//                     data.phone,
//                     data.interest,
//                     data.date,
//                 ]
//             })
//             .then((result) => {
//                 console.log(result)
//                 resolve(result)
//             }).catch((err) => {
//                 console.log(err)
//                 reject(err)
//             });
//     });
// }

// IndexModel.insertProyect = data => {
//     return makePromess('CALL sp_insert_proyect(?,?,?,?,?,?,?)', [
//         data.title,
//         data.category,
//         data.description,
//         data.location,
//         data.money,
//         data.duration,
//         data.colaborations
//     ])
// }

// IndexModel.deleteProyect = data => {
//     return makePromess('CALL sp_delete_proyect(?)', [
//         data.title
//     ])
// }

module.exports = IndexModel;