console.log('the bot is working');


var Twit = require ('twit'); 
var config = require('./config');

var T = new Twit(config);

var fs = require ('fs'); //(file system) node package that allows you to read files 
var exec = require('child_process').exec; //node is a process that can have 'child processes' ->other processes triggered while it is running  


tweetIt(); 


function tweetIt(){
	var cmd = 'processing-java --sketch=`pwd`/crossPic --run' //terminal cmd that connects processing file to node.js
	
	exec(cmd, processing);

	function processing(){ //here is where I open file form harddrive and then upload file to harddrive 
		var filename= 'imgProcessing/crossPic/output1.png'

		var params = {
			encoding: 'base64' //how the data will be read in the computer
			}
		
		var b64 = fs.readFileSync(filename, params)
		

		T.post('media/upload', {media_data: b64}, uploaded); //callback for when the info is uploaded
		//have to first upload image media to twitter to get an ID before posting

						       //data will have the numeric id for image
		function uploaded (err, data, reponse){ //this is where I will tweet! 
				var id = data.media_id_string;
				var tweet = {
					status: 'cross',
					media_ids: [id] //you can have more than one image ID linked with a tweet 
				}

				T.post ('statuses/update', tweet, tweeted);
				
		}
		

		function tweeted(err, data, response) {
			if (err){
				console.log("something went wrong");
				console.log(err);
			} else {
				console.log("it worked!");
				}
		} 

	}	

 }



// //--------------------------------------processing image----------------------------------------------------------------

console.log('the bot is working');


var Twit = require ('twit'); //import the package 
var config = require('./config');
// console.log(config);
var T = new Twit(config);

var cmd = 'processing-java --sketch=`pwd`/crossPic --run' //terminal cmd that connects processing file to node.js

var exec = require('child_process').exec; //node is a process that can have 'child processes' ->other processes triggered while it is running 

exec(cmd, processing);

function processing(){
	console.log("finished");
}
