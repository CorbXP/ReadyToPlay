//game name, description, release date, is it fun, how much does it cost, where can I get it from, do you already own it.

const mongoose = require('mongoose')

const ReadyToPlaySchema = new mongoose.Schema({

  GameName: {
    type: String,
    required: [true, "Must have a game name"],
    minlength: [1, "Must be at least one character"]
  },
  Description: {
    type: String,
    required: [true, "Must provide a description for the game"],
    minlength: [5,"Gotta actually put something here"]
  },
  ReleaseDate: {
    type: Number,
    required: [true, "Must have a release date for the game"],
  },
  Fun: {
    type: String,
    required: [true, "Is the game fun"]
  },
  CostAmount: {
    type: Number,
    required: [true, "How much does it cost (in USD)"]
  },
  GameLocation: {
    type: String,
    required: [true, "Where can you get the game"]
  },
  OwnGame: {
    type: String,
    required: [true, "Do you already own the game"]
  },
  Rating: {
    type: Number,
    required: [true, "How much do you like the game"]
  }

},  {timestamps:true})


const ReadyToPlay = mongoose.model("FindMyGame" , ReadyToPlaySchema);

module.exports = ReadyToPlay;

