const uid = require('uid'),
    { validationResult } = require("express-validator/check");

const IndexController = {},
    Index = require('../models/indexModel');

// Web
IndexController.getRooms = (req, res) => {
    return Index.getRoomsData()
        .then((result) => {
            console.log(result)
            return result.length > 0
                ? res.status(200).json({
                    message: 'Mostrando habitaciones',
                    value: result
                })
                : res.status(202).json({
                    message: 'No cuenta con habitaciones',
                    value: result
                });
        }).catch((err) => {
            return res.status(500).json({ errors: err.stack });
        });
}

IndexController.insertReservation = (req, res) => {
    let data = {
        initDate: req.body.initDate,
        email: req.body.email,
        name: req.body.name,
        lastname: req.body.lastname,
        dni: req.body.dni,
        numCard: req.body.numCard,
        cvv: req.body.cvv,
        idHab: req.body.idHab,        
    }, errors = validationResult(req);

    return !errors.isEmpty()
        ? res.status(422).json({ errors: errors.array() })
        : Index.insertReservationData(data)
            .then((result) => {
                return result[0].response == 1
                    ? res.status(201).json({
                        message: 'Reserva realizada correctamente'
                    })
                    : res.status(202).json({
                        message: 'Error al realizar reserva vuelva a intentarlo'
                    });
            }).catch((err) => {
                return res.status(500).json({ errors: err.stack });
            });
}

// App
IndexController.getReservation = (req, res) => {
    return Index.getReservationData()
        .then((result) => {
            console.log(result)
            return result.length > 0
                ? res.status(200).json({
                    message: 'Mostrando reservaciones',
                    value: result
                })
                : res.status(202).json({
                    message: 'No cuenta con reservaciones',
                    value: result
                });
        }).catch((err) => {
            return res.status(500).json({ errors: err.stack });
        });
}

module.exports = IndexController;