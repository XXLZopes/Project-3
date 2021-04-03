const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const statsSchema = new Schema({
    makes: {
      type: Number,
      required: true,
    },
    misses: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    shotType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  });

module.exports = statsSchema;
