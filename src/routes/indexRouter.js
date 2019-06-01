const { check } = require('express-validator/check'),
    express = require('express'),
    router = express.Router();

const IndexController = require("../controllers/indexController");

// web
router
    .get("/rooms", IndexController.getRooms)
    .post("/reservation", IndexController.insertReservation);

// app
router
    .get("/reservations", IndexController.getReservation);

module.exports = router;