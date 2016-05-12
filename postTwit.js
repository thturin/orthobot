console.log('the bot is working');

 //import the 'twit' node package that will communicate/authorize to twitter
var Twit = require ('twit');



var config = require('./config'); //'./' is very important dont forget
// var T = new Twit ({
// 		consumer_key:
// 		,consumer_secret:
// 		,access_token:
// 		,access_token_secret:
// });

var T = new Twit(config);

// POSTING A TWEET 

// ----write your text here for post/makes a status-----
var tweet = {
	status: 'poop'
}


//-----posts tweet message/posts to twitter API---
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
	if (err){
		console.log("something went wrong"+err);
	} else {
		console.log("it worked!");
	}

}






 