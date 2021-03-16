const { Schema, model } = require("mongoose");

const placeLocaleSchema = new Schema({
  _id: false,
  lang: String,
  name: String,
  description: String,
});

const placeSchema = new Schema({
  countryId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  localizations: [placeLocaleSchema],
});

const Place = model("Place", placeSchema);

module.exports = Place;

// places.forEach((element) => {
//   new Place(element);
// });
