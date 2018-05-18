/* Express Server Definitons - As Basic As You Can Get */
var express = require('express');
var app = express();

// Load up MongoDB noSQL data models
var db = require('./models');

// Handles CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Profile Data: hardcoded to server as it's staic and only used once.
var profile = {
  name: "Will Kaspar",
  githubLink: "https://github.com/wakaspar",
  githubProfileImage: "https://avatars2.githubusercontent.com/u/22823273?v=3&s=460",
  personalSiteLink: "https://wakaspar.com/",
  currentCity: "San Francisco, CA",
  pets: [
    {name: 'Indigo', type: 'dog', breed: 'cattle-beagle'},
    {name: 'Furball', type: 'fish', breed: 'goldfish'}
  ],
  plants: [
    {name: 'Bernard', type: 'plant', breed: 'aeonium arboreum'},
    {name: 'Francis', type: 'plant', breed: 'sempervivum tectorum'}
  ]
};

/* Service Routes */
// Serves index.html as homepage
app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
})
// Serves 'profile' as .json
app.get('/profile', function (req, res){
  res.send(profile);
})

// Serves Static Files
app.use(express.static('public'));


/* API Routes */
//Defines 'get' all books
app.get('/api/books', function allBooks(req, res){
  db.Book.find(function(err, books){
    if(err){console.log('GET /api/books error: ', err);}
    res.send(books);
  })
})

// Sets port for deployment
app.listen(process.env.PORT || 3000, function () {
  console.log('Booktionary is up and running on http://localhost:3000/');
});
