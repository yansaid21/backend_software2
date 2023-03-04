const MONGOOSE = require("mongoose");

const Schema = MONGOOSE.Schema;
const superheroSchema = new Schema({
  superhero: { type: String, require: true },
  universe: { type: String, require: true, },
  superpowers: [String],
  creators: [String],
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
});

module.exports = MONGOOSE.model("UserCollection", superheroSchema);
