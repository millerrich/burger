var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },
    updateOne: function(newID, cb) {
        orm.updateOne(newID, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;