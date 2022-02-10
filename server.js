require("./configs/database.config");

const Cat = require("./models/Cat.model");

// Cat.findOneAndUpdate() is dangerous because it will update the worng objects
// if the fiilter b'object is "wrong"

Cat.findByIdAndUpdate(
  "6204fefb96ac0362d32a9c9f",
  { $set: { name: "Sandra" } },
  { new: true }
).then((cat) => console.log(cat));
