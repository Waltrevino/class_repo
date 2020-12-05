const db = require("./models.js");

// Find all the pets ordering by the lowest price to the highest price.
db.Pet.selectAndOrder(["animal_name", "price"], "price").then(pets => {
    console.log("Pets by Price");
    console.table(pets);
})

// Find a pet in the pets table by an animal_name of Rachel.
db.Pet.selectWhere("animal_name", "Rachel").then(pets => {
    console.log("Pets named Rachel");
    console.table(pets);
})

// Find the buyer with the most pets.
db.Buyer.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets").then(buyers => {
    console.log("Who has the most");
    console.table(buyers);
})
