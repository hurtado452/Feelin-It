var Twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);

var tag = "#Trump"

var searchTweet = function(){
    //console.log(tag);
    var params = {
        q: tag,
        result_type: 'recent',
        lang:'en'
    }
    //finds latest tweets based on query
    Twitter.get('search/tweets',params,function(err,data, response){
        if(!err){
            console.log(data);
            
        }
        else{
            //can't search tweet
            console.log('Uh oh looks like tweet isn\'t found');
        }
    });
}

searchTweet();