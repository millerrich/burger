var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(burgers) {
        res.render("index", { burgers });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/")
    });
});

module.exports = router;