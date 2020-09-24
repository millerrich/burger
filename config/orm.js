var connection = require("./connection");

var orm = {
    all: function(table, cb) {
        connection.query("SELECT * FROM ??",[table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
//     insertOne: function()
//     updateOne: function()
};

module.exports = orm;