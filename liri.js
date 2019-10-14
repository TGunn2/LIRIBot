require("dotenv").config();
// require("dotenv").config();
var keys = require('./keys.js');
var axios = require('axios');
var fs = require("fs");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var getMeSpotify = function (songName) {
    var songName = "";
    songName += process.argv[2]+ ""
    spotify.search({ type: 'track', query: songName, limit:2 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].artists);
    });
};

var getMeMovie = function (movieName) {
    var movieName = process.argv[2] + " ";
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
        console.log('the release year of the movie is : ' + response.data.Year);
    })
}

// fs.readFile("random.txt", "utf8", function (error, data) {

//     if (error) {
//         return console.log(error);
//     }

//     var dataArr = data.split(",");

//     console.log(dataArr);
// });

// getMeMovie();
getMeSpotify();


