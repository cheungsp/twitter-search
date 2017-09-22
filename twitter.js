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
  var params = { 
    // q: 'Trump', 
    q: originInput, 
    count: 5
  }

  T.get('search/tweets', params, gotData); 

  function gotData(err, data, response) {
    let tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i]);  	
      console.log(tweets[i].created_at);  	
      // console.log('text:' + tweets[i].text);  	
      // console.log(tweets[i].user);
      // console.log(tweets[i].user.name);
      // console.log(tweets[i].user.screen_name);
      // console.log(tweets[i].user.profile_image_url);
        	
      // let ul = document.getElementById("result-box");
      // let li = document.createElement("li");
      // li.appendChild(document.createTextNode(tweets[i].text));
      // ul.appendChild(li);
      let screenName = document.createTextNode(tweets[i].user.screen_name);
      let name = document.createTextNode(tweets[i].user.name);
      let newContent = document.createTextNode(tweets[i].text);
      let userPicUrl = document.createTextNode(tweets[i].user.profile_image_url);
      let createdAt = document.createTextNode(tweets[i].created_at);
      let userPic = document.createElement('img')
      let linebreak = document.createElement("br");
      // userPic.setAttribute("src", "http://pbs.twimg.com/profile_images/581114932592283648/VVwH1C0o_normal.jpg");
      // userPic.setAttribute('src', `${userPicUrl}`);
      $(userPic).attr('src', userPicUrl.textContent);
      // document.getElementById("result-box").appendChild(li); 
      // document.getElementById("result-box").innerHTML = tweets[i].text;
      
      // let textbox =  document.getElementsByClassName("info")[0];
      // let newContent = document.createTextNode(tweets[i].text);
      // textbox.appendChild(newContent);
      let target = document.getElementsByClassName("holder")[0];

      // let node = document.getElementsByClassName("row")[1];
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

