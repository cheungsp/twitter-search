console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

$('#delete-button').click(function(){
  var tweets = document.getElementsByClassName('tweetholder');
  for (let i = 1; i < tweets.length; i++) {
    while( tweets[i].hasChildNodes() ){
      tweets[i].removeChild(tweets[i].lastChild);
    }
  }
})

$('#search-button').click(function(){
  var T = new Twit(config);
  let originInput = document.getElementById('search-input').value;
  let tweetCount = document.getElementById('tweet-number').value;
  let resultType = document.getElementById('result-type').value.toLowerCase();
  var params = { 
    q: originInput, 
    count: tweetCount,
    result_type: resultType
  }
  
  let userParams = {
    screen_name: originInput,
    count: tweetCount
  }
  
  let searchType = document.getElementById('search-type').value;
  
  if (searchType === 'Keyword') {
    T.get('search/tweets', params, gotData); 
  } 
  else {
    T.get('statuses/user_timeline', userParams , userData);
  }

  function gotData(err, data, response) {
    let tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      let screenName = document.createTextNode(tweets[i].user.screen_name);
      let name = document.createTextNode(tweets[i].user.name);
      let newContent = document.createTextNode(tweets[i].text);
      let userPicUrl = document.createTextNode(tweets[i].user.profile_image_url);
      let createdAt = document.createTextNode(tweets[i].created_at);
      let userPic = document.createElement('img')
      let linebreak = document.createElement("br");
      $(userPic).attr('src', userPicUrl.textContent);
      let target = document.getElementsByClassName("holder")[0];
      let node = document.getElementsByClassName("tweetholder")[0];
      let pic = document.getElementsByClassName("picture")[0];
      let info = document.getElementsByClassName("info")[0];
      let userName = document.getElementsByClassName("user-name")[0];
      let timeStamp = document.getElementsByClassName("time")[0];
      
      let dupNode = node.cloneNode(false);
      let picNode = pic.cloneNode(false);
      let infoNode = info.cloneNode(false);
      let userNameNode = userName.cloneNode(false);
      let timeNode = timeStamp.cloneNode(false);
      
      infoNode.appendChild(newContent);
      picNode.appendChild(userPic);
      userNameNode.appendChild(screenName);
      userNameNode.appendChild(linebreak);
      userNameNode.appendChild(name);
      timeNode.appendChild(createdAt)
      
      dupNode.appendChild(picNode);
      dupNode.appendChild(userNameNode);
      dupNode.appendChild(infoNode);
      dupNode.appendChild(timeNode);
      target.appendChild(dupNode);
    }
  }  
  
  function userData(err, data, response){
    let tweets = data;
    for (var i = 0; i < tweets.length; i++){
      let screenName = document.createTextNode(tweets[i].user.screen_name);
      let name = document.createTextNode(tweets[i].user.name);
      let newContent = document.createTextNode(tweets[i].text);
      let userPicUrl = document.createTextNode(tweets[i].user.profile_image_url);
      let createdAt = document.createTextNode(tweets[i].created_at);
      let userPic = document.createElement('img')
      let linebreak = document.createElement("br");
      $(userPic).attr('src', userPicUrl.textContent);
      let target = document.getElementsByClassName("holder")[0];
      let node = document.getElementsByClassName("tweetholder")[0];
      let pic = document.getElementsByClassName("picture")[0];
      let info = document.getElementsByClassName("info")[0];
      let userName = document.getElementsByClassName("user-name")[0];
      let timeStamp = document.getElementsByClassName("time")[0];
      
      let dupNode = node.cloneNode(false);
      let picNode = pic.cloneNode(false);
      let infoNode = info.cloneNode(false);
      let userNameNode = userName.cloneNode(false);
      let timeNode = timeStamp.cloneNode(false);
      
      infoNode.appendChild(newContent);
      picNode.appendChild(userPic);
      userNameNode.appendChild(screenName);
      userNameNode.appendChild(linebreak);
      userNameNode.appendChild(name);
      timeNode.appendChild(createdAt)
      
      dupNode.appendChild(picNode);
      dupNode.appendChild(userNameNode);
      dupNode.appendChild(infoNode);
      dupNode.appendChild(timeNode);
      target.appendChild(dupNode);
    }
  }
});

