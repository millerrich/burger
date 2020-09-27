var connection = require("./connection");

var orm = {
    all: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: name,
            devoured: false
        },
            function (err, res) {
                if (err) throw err;
                cb(res);
            });
    },
    updateOne: function (newID, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{ devoured: true }, { id: newID }],
            function (err, res) {
                if (err) throw err;
                cb(res);
            });
    }
};

module.exports = orm;