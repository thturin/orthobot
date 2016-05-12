
console.log('the bot is working');

var markov;
// var path = require ('path');



var fs = require('fs');
fs.readFile('bible.txt', 'utf8', function (err, logData) {
	if (err) {

		return console.log(err);
	 
	// var bible = logData.toString();
	}
	console.log(logData) ;
});







// var rita = require('rita');
// var data1 = rita.RiTa.loadString(bible);
// var data2 = rita.RiTa.loadString(file2);
// markov = new rita.RiMarkov(2);
// markov = rita.RiTa.loadText(data1.join(' '));
// markov = rita.RiTa.loadText(data2.join(' '));
// var lines = markov.generateSentences(1);
// console.log(lines);



var Twit = require ('twit');
var config = require('./config'); 

var T = new Twit(config);
var tweet = {
	status: bible
}

T.post('statuses/update', tweet, tweeted);














function tweeted(err, data, response) {
	if (err){
		console.log("something went wrong"+err);
	} else {
		console.log("it worked!");
	}

}