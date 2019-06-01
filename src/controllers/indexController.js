const request = require('request'),
    uid = require('uid'),
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
        name: req.body.name,
        lastname: req.body.lastname,
        dni: req.body.dni,
        email: req.body.email,
        phone: req.body.phone,
        interest: req.body.interest,
        date: req.body.date,
    }, errors = validationResult(req);

    return !errors.isEmpty()
        ? res.status(422).json({ errors: errors.array() })
        : Index.insertPerson(data)
            .then((result) => {
                return result.length > 0
                    ? res.status(201).json({ message: 'usuario registrado con exito' })
                    : res.status(202).json({ message: 'ocurrio un error intentelo de nuevo' });
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