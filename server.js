var express = require("express");
var path = require("path")
var mongoose = require("mongoose");
const axios = require("axios")

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3001;

// if (process.env.NODE_ENV === "production"){
//   app.use(express.static("client/build"))
// }



// Require all models
var db = require("./models");



// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// Connect to the Mongo DB
mongoose
.connect("mongodb://heroku_0ctghlfn:eh8nm08nffpjn7slraem63qnps@ds159493.mlab.com:59493/heroku_0ctghlfn", { useNewUrlParser: true });


//Routes
require("./routes/api/books")(app)

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  // app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
}

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
