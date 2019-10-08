// require("dotenv").config();
var keys = require('./keys.js');
var axios = require('axios');
var fs = require("fs");
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: '5239157104bd42d18e0330fe601dbd1b',
    secret: '3f9d56d607e74befb6b026822fa6f927',
});

var getMeSpotify = function (songName) {
    var songName = "";
    songName += process.argv[2]+ ""
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
};

var getMeMovie = function (movieName) {
    var movieName = process.argv[2] + " ";
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
        console.log('the release year of the movie is : ' + response.data.Year);
    })
}

fs.readFile("random.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    var dataArr = data.split(",");

    console.log(dataArr);
});

// getMeMovie();
getMeSpotify();


