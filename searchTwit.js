// ---------SEARCH USING PARAMETERS (#, LOCATION)--------------------------------------------------------------------
// search a twitter post with the word "kitten" in terminal
console.log('the bot is working');

 //import the 'twit' node package that will communicate/authorize to twitter
var Twit = require ('twit');

var config = require('./config'); //'./' is very important dont forget

var T = new Twit(config);



 var params = {
 	q: 'kitten',
 	 count: 2 
 	 //ad more parameteres from dev.twitter.com
 }

T.get('search/tweets', params, gotData);

	function gotData (err,data,response){
		//gives you all the data so you will have to find search tweets yourself
		//console.log(data); 

		//terminal will output single piece of information you specify from array
		var tweets = data.statuses
			for (var i=0; i< tweets.length; i++){
				console.log(tweets[i].text);
			}
	} 




//collapsed version of T.get
// T.get('search/tweets', { q: 'kittens', count: 100 }, function(err, data, response) {
//   console.log(data)
// })