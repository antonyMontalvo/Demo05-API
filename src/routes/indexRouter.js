const { check } = require('express-validator/check'),
    express = require('express'),
    router = express.Router();

const IndexController = require("../controllers/indexController");

// web
router
    .get("/rooms", IndexController.getRooms)
    .post("/reservation",[
        check('initDate').exists().isISO8601(),
        check('email').exists().isEmail(),
        check('name').exists(),
        check('lastname').exists(),
        check('dni').exists().isLength({ min: 8, max: 8 }),
        check('numCard').exists(),
        check('cvv').exists(),
        check('idHab').exists(),
    ], IndexController.insertReservation);

// app
router
    .get("/reservations", IndexController.getReservation);

module.exports = router;