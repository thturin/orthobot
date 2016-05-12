console.log('the followbot is working');

var Twit = require ('twit');
var config = require('./config'); 
var T = new Twit(config);


var stream = T.stream('user');

stream.on('follow', followed);


//anytime someone follows me 
function followed (eventMsg){
	console.log("followed!");
	//this is JSON data
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('.@' + screenName + 'meow test thanks for the folllow');
}

//post a tweet based on a particular 'follow' event 



function tweetIt(txt){

		var r = Math.floor(Math.random()*100); 

		var tweet = {
		status: txt
		}
	
		T.post('statuses/update', tweet, tweeted);

		function tweeted(err, data, response) {
			if (err){
				console.log("something went wrong"+err);
			} else {
				console.log("it worked!");
				}	
		}
}






/////////////////////////////////////////////////SEND TWEET WITH RANDOM NUMBER EVERY 20 SECONDS?/////////////////

// console.log('the bot is working');

// var Twit = require ('twit');
// var config = require('./config'); 
// var T = new Twit(config);


// var stream = T.stream('user');

// stream.on('follow', followed);

// function followed (eventMsg){
// 	tweetIt();
// }


// tweetIt(); 
// setInterval(tweetIt, 1000*20); //post tweet every 20 minutes? seconds?


// function tweetIt(){

// 		var r = Math.floor(Math.random()*100*20); 

// 		var tweet = {
// 		status: 'how many more tests?' + r
// 		}
	
// 		T.post('statuses/update', tweet, tweeted);

// 		function tweeted(err, data, response) {
// 			if (err){
// 				console.log("something went wrong"+err);
// 			} else {
// 				console.log("it worked!");
// 		}	

// }









 