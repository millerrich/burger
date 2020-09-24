var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(burgers) {
        res.render("index", { burgers });
    });
});

module.exports = router;