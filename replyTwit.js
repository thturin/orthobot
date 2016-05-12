//THIS BOT IS CONNECTED TO @TATITURIN


console.log("the reply is starting");

var Twit = require ('twit');
var config=require('./config');

//my connection to the API
var T = new Twit(config);

//setting up a user stream 
var stream = T.stream('user');

//anytime someone tweets me 
stream.on('tweet', tweetEvent);
//anytime there is a tweet event I want this function to trigger


//anytime anyone tweets me, this code will be executed, this will handle the stream
function tweetEvent(eventMsg){
					//eventMsg is data from tweet (location, source screen name, text,) ..turn into JSON string 

//anytime someone sends a tweet to me i send a tweet back to them
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;
	
	console.log(replyto + '' + from);

//if user mentions me (the bot) in their tweet, tweet this message 
	if(replyto === 'tatiturin'){
		var newTweet = '@' +from + 'wasssaap' ;
		tweetIt(newTweet);
	}

}



function tweetIt(txt){ 

	var tweet = {
	status: txt
	}
							  //callback
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err,data,response){
		if(err){
			console.log("you fucked up!!");
		}else{
		console.log("fuck yeah!");		}
	}
}















/////////////////////////////////////////////////MAKING JSON FILE WITH TWEET DATA//////////////////////////////////////////





// console.log("the reply is starting");

// var Twit = require ('twit');
// var config=require('./config');

// //my connection to the API
// var T = new Twit(config);

// //setting up a user stream 
// var stream = T.stream('user');

// //anytime someone tweets me 
// stream.on('tweet', tweetEvent);
// //anytime there is a tweet event I want this function to trigger


// //anytime anyone follows me, this code will be executed, this will handle the stream
// function tweetEvent(eventMsg){
// //what's all this stuff (information from twitter documentation )
// 	//allows you to ream file systems
// 	var fs = require ('fs');
// 	//this takes javascript object and turns into string bc i will write this out into a file  
// 	var json = JSON.stringify(eventMsg,null,2);
// 	fs.writeFile("tweet2.json", json);
// 	//or you could console.log(eventMsg); but that would be messy
// 	}


// function tweetIt(txt){ 


// 	var tweet = {
// 	status: 'txt'
// 	}
// 							  //callback
// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err,data,response){
// 		if(err){
// 			console.log("you fucked up!!")
// 		}else{
// 		console.log("fuck yeah!");		}
// 	}
// }









