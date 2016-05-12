console.log('the bot is working');


var Twit = require ('twit'); //import the package 
var config = require('./config');
// console.log(config);
var T = new Twit(config);


tweetIt();

function tweetIt(){
	var tweet = {
		status: '#meow meow testing still'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	if (err){
		console.log("something went wrong");
		console.log(err);
	} else {
		console.log("it worked!");
		}
	}

 }






















//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me 
stream.on('follow', followed);
function followed(){
	tweetIt();
}



function followed(eventMsg){ 
	tweetIt();
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('@' + screenName + 'do you like rainbows')
}


tweetIt();
setInterval(tweetIt, 1000*60*60)
1000*60 =once a minute
100*60*60 = once an hour

function tweetIt(txt){

	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: 'here is a random number' + r +'yay'
	}

	



