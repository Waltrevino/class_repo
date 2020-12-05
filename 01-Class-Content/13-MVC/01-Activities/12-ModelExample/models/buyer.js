const connection = require("../config/connection.js");

const Buyer = {
    selectWhere: function(column, value){
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM buyers WHERE ?? = ?", [column, value], function(err, data){
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
            connection.query("SELECT ?? FROM buyers ORDER BY ?? DESC", [selectColumns, orderColumn], function(err, data){
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    },
    findWhoHasMostPets: function(){
        return new Promise((resolve, reject) => {
            ;
            connection.query(`
                SELECT buyers.name, COUNT(*) AS count 
                FROM buyers LEFT JOIN pets 
                    ON pets.buyer_id = buyer.id 
                GROUP BY buyer_name 
                ORDER BY count DESC LIMIT 1`, function(err, data){
                if(err){
                    reject(err);
                } else {
                    resolve(data[0]);
                }
            })
        })
    }
};

module.exports = Buyer;