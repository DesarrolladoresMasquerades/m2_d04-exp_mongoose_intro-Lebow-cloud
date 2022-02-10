// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Reading the cats from DB (use find(), findOne(), findById())
// ----------------------------------------------------------------------------

// .find() we are always getting array back as a response

Cat.find(
    {
        age: {$gt: 0},
        color: {$in: ["white", "black", "green"]},
        friends: {$elemMatch: {$eq: "yin"}}
    }
)
.then(cats=> cats.forEach(cat=>console.log(cat)))
.catch(error => console.log(error))

// .findById() we are always getting object back as a response
Cat

// Bonus: Count documents
Cat