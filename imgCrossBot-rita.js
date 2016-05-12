console.log("the crossbot is working");


var Twit= require('twit');
var config=require('./config');

var fs = require ('fs');

var rita = require('rita');
//fstxt is the same as 'fs' but already used that variable for image coding
var fstxt=require('fs');
var bible=fstxt.readFileSync('bible2.txt', "utf8").toString();
var darwin=fstxt.readFileSync('darwin.txt',"utf8").toString();

var biblee=bible.replace(/[0-9]/g, '');
// var newDarwin = bible.replace(/(\r\n|\n|\r),/gm," ");
// var newBible = bible.replace(/(\r\n|\n|\r),/gm," "); 
// //does not delete spaces in string

var markov= rita.RiMarkov(2);
//var markov

markov.loadText(biblee);
markov.loadText(darwin);

var sentencesB= markov.generateSentences(1);
// var sentencesD = markovD.generateSentences(1);
var lines = [sentencesB];

console.log(lines);

var T = new Twit(config);


var exec=require('child_process').exec; //package that allows node to process more than one function at a time (you are tweeting and uploading an image)

//stream event data involving the bot (@ mention)
var stream = T.stream('user');

//anytime someone tweets the bot, I want tweetEvent function to trigger
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){

   var replyto = eventMsg.in_reply_to_screen_name;
   

   var text = eventMsg.text;
   
   //who the tweet is from 
   var from = eventMsg.user.screen_name; 

   if(replyto === 'tatiturin'){

        tweetIt();
     
   }

}



function tweetIt(){

    var rcmd = Math.floor((Math.random()*22)+1);  
    var cmd = 'processing-java --sketch=`pwd`/crossPic'+rcmd+' --run' //goes through computer directory and sees file names. puts them into random list. this will prevent the files from processing all at once and then posting all at once  
    exec(cmd, processing);
    
    function processing (){

                var filename1= 'imgProcessing/crossPic1/output1.png'
                var filename2= 'imgProcessing/crossPic2/output2.png'
                var filename3= 'imgProcessing/crossPic3/output3.png'
                var filename4= 'imgProcessing/crossPic4/output4.png'
                var filename5= 'imgProcessing/crossPic5/output5.png'
                var filename6= 'imgProcessing/crossPic6/output6.png'
                var filename7= 'imgProcessing/crossPic7/output7.png'
                var filename8= 'imgProcessing/crossPic8/output8.png'
                var filename9= 'imgProcessing/crossPic9/output9.png'
                var filename10= 'imgProcessing/crossPic10/output10.png'
                var filename11= 'imgProcessing/crossPic11/output11.png'
                var filename12= 'imgProcessing/crossPic12/output12.png'
                var filename13= 'imgProcessing/crossPic13/output13.png'
                var filename14= 'imgProcessing/crossPic14/output14.png'
                var filename15= 'imgProcessing/crossPic15/output15.png'
                var filename16= 'imgProcessing/crossPic16/output16.png'
                var filename17= 'imgProcessing/crossPic17/output17.png'
                var filename18= 'imgProcessing/crossPic18/output18.png'
                var filename19= 'imgProcessing/crossPic19/output19.png'
                var filename20= 'imgProcessing/crossPic20/output20.png'
                var filename21= 'imgProcessing/crossPic21/output21.png'
                var filename22= 'imgProcessing/crossPic22/output22.png'

                var params = {
                	encoding:'base64' //how the data of the files will actually be read by the computer 
                }

                var b641 = fs.readFileSync(filename1, params); // to read a file you need 
                var b642 = fs.readFileSync(filename2, params);
                var b643 = fs.readFileSync(filename3, params);
                var b644 = fs.readFileSync(filename4, params);
                var b645 = fs.readFileSync(filename5, params);
                var b646 = fs.readFileSync(filename6, params);
                var b647 = fs.readFileSync(filename7, params);
                var b648 = fs.readFileSync(filename8, params);
                var b649 = fs.readFileSync(filename9, params);
                var b6410 = fs.readFileSync(filename10, params);
                var b6411 = fs.readFileSync(filename11, params);
                var b6412 = fs.readFileSync(filename12, params);
                var b6413 = fs.readFileSync(filename13, params);
                var b6414 = fs.readFileSync(filename14, params);
                var b6415 = fs.readFileSync(filename15, params);
                var b6416 = fs.readFileSync(filename16, params);
                var b6417 = fs.readFileSync(filename17, params);
                var b6418 = fs.readFileSync(filename18, params);
                var b6419 = fs.readFileSync(filename19, params);
                var b6420 = fs.readFileSync(filename20, params);
                var b6421 = fs.readFileSync(filename21, params);
                var b6422 = fs.readFileSync(filename22, params);
                var crosses = [b641,b642,b643,b644,b645,b646,b647,b648,b649,b6410,b6411,b6412,b6413,b6414,b6415,b6416,b6417,b6418,b6419,b6420,b6421,b6422];
                
             // var r= is gonna be a random (r64..) within array 
                var r = Math.floor(Math.random()*(crosses.length-1)); 

                console.log(r);


                                                    //b641 ->single photo
	            T.post('media/upload', {media_data: crosses[r] }, uploaded); //'uploaded' callback for when the image data is uploaded but not posted yet 
							
                                      //data will have a numeric id for image to be uploaded 
		      function uploaded (err, data, reponse){ //this is where I will tweet! 
				    var id = data.media_id_string;
                                //params
				 var tweet = {
					   status: lines,
					
					   media_ids: [id] //you can have more than one image ID linked with a tweet 
				    }
                                                        //params
				    T.post ('statuses/update', tweet, tweeted);		
		      }
        
        }
 }




        function tweeted(err, data, response) {
            if (err){
                console.log("something went wrong");
                console.log(err);
            } else {
                console.log("it worked!");
                }
        }











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//importing child process thing so that command can be executed (just like typing) it into console itself
// and when it's finished call function processing ()


// console.log("the bot is working");


// var Twit= require('twit');
// var config=require('./config');


// var T = new Twit(config);

// var fs=require('fs');
// var exec=require('child_process').exec; 


//         var cmd = 'processing-java --sketch=`pwd`/crossPic --run'

//         exec(cmd, processing);

// function processing (){
//         console.log('finished');
// } 






