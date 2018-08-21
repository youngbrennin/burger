// PULLING IN THE CONNECTION FROM SQL
var connection = require('./connection.js');


// METHODS FOR GETTING OR ALTERATING DATA FROM THE DATABASE
var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: function (tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName + "(" + cols + ") VALUES (" + vals + ")";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: function (tableName, cols, vals, whereToSet, whereVal, cb) {
        var queryString = "UPDATE " + tableName + " SET " + cols + "=" + vals + " WHERE " + whereToSet + "=" + whereVal;
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    }
};


module.exports = orm;
