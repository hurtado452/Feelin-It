var twit = require('twitter');
var config = require('./config.js');
var twitter = new twit(config);

var message = '#FindStuff4';

//streaming api
Twitter.stream('status/filter', {track: message}, function(stream){
    stream.on('data',function(tweet){
        console.log(tweet.text);
    });

    stream.on('error', function(error){
        console.log(error);
    });
});