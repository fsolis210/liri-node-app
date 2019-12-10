
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");

var axios = require("axios");


var Spotify = require("node-spotify-api");

var spotifyKeyInfo = require("./keys.js");

var spotify = new Spotify({
    id: spotifyKeyInfo["spotify"].id,
    secret: spotifyKeyInfo["spotify"].secret
});

spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function(error, songResponse) {
    if (error){
        return console.log(error);
    }
    console.log("Artist: " + songResponse.tracks.items[0].artists[0].name);
    console.log("Song: " + songResponse.tracks.items[0].name);
    console.log("URL: " + songResponse.tracks.items[0].preview_url);
    console.log("Album: " + songResponse.tracks.items[0].album.name);
});

var userInput = process.argv;
var inputTopic = process.argv[2];


switch (inputTopic){
    
    case "spotify-this-song":
        songInfo();
        break;

        case "movie-this":
            movieInfo();
            break;

}

function songInfo(){
    var songName = "";
    for (var i = 3; i < userInput.length; i++){
        if (i > 3 && i < userInput.length){
            songName = songName + "+" + userInput[i];
        }
        else{
            songName += userInput[i];
        }
    }
}

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=[b7a220ed]";

    axios.get(queryURL).then(
        function(movieResponse){
            console.log("Title: " + movieResponse.data.Title);
            console.log("Year: " + movieResponse.data.Year);
            console.log("Rated: " + movieResponse.data.imdbRating);
            console.log("Country: " + movieResponse.data.Country);
            console.log("Language: " + movieResponse.data.Language);
            console.log("Plot: " + movieResponse.data.Plot);
            console.log("Actors: " + movieResponse.data.Actors);
            console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
        }
    );

    function movieInfo(){
        var movieName = "";
        for (var i = 3; i < userInput.length; i++){
            if (i > 3 && i < userInput.length){
                movieName = movieName + "+" + userInput[i];
            }
            else{
                movieName += userInput[i];
            }
        }
    };
