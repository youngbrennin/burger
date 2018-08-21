var orm = require("../config/orm.js");

var burger = {
    forAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    makeOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    changeOne: function (col, vals, whereToSet, whereVal, cb) {
        orm.updateOne("burgers", col, vals, whereToSet, whereVal, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;











