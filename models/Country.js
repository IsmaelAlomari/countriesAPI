const mongoose = require("mongoose");

//import the slug package
const slug = require("mongoose-slug-generator");
const { stringify } = require("querystring");
//Initialize
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    common: String,
    official: String,
  },
  cca2: String,
  ccn3: String,
  cca3: String,
  currencies: [
    {
      code: String,
      name: String,
    },
  ],
  region: String,
  languages: [
    {
      code: String,
      name: String,
    },
  ],
  location: {
    latitude: Number,
    longitude: Number,
  },
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
