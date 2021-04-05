const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const preferencesSchema = new Schema({
  dominantHand: {
    type: String,
  },
  position: {
    type: String,
  },
  team: {
    type: String,
  },
  favTeam: {
    type: String,
  },
  courtColors: {
    type: String,
  },
});

module.exports = preferencesSchema;
