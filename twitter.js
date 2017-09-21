console.log('The bot is starting');
// var Twit = require('twit');
// 
// var config = require('./config');
// var T = new Twit(config);
// 
// var params = { 
//   q: 'Trump', 
//   count: 1 
// }
// 
// T.get('search/tweets', params, gotData); 
// 
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);  	
//   }
// }
var Twit = require('twit');
var config = require('./config');


$('#search-button').click(function(){
  var T = new Twit(config);
  let originInput = document.getElementById('search-input').value;
  var params = { 
    // q: 'Trump', 
    q: originInput, 
    count: 3 
  }

  T.get('search/tweets', params, gotData); 

  function gotData(err, data, response) {
    let tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i]);  	
      console.log(tweets[i].text);  	
      let ul = document.getElementById("result-box");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(tweets[i].text));
      ul.appendChild(li);
      // var newContent = document.createTextNode(tweets[i].text);
      // document.getElementById("result-box").appendChild(li); 
      // document.getElementById("result-box").innerHTML = tweets[i].text;
    }
  }
  
});