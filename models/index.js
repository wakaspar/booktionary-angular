/* Mongoose Model Index */
// Loads Mongoose & defines database connection parameters
var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/api");

// Exports module to server.js
module.exports.Book = require('./book');
