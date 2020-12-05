const connection = require("../config/connection.js");

const Pet = {
    selectWhere: function(column, value){
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM pets WHERE ?? = ?", [column, value], function(err, data){
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    },
    selectAndOrder: function(selectColumns, orderColumn){
        return new Promise((resolve, reject) => {
            connection.query("SELECT ?? FROM pets ORDER BY ?? DESC", [selectColumns, orderColumn], function(err, data){
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
};

module.exports = Pet;