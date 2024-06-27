//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAwzedYcdRiI5sJrJQOd-xHMSd_jU7KMrI",
      authDomain: "kwitter-app-bc277.firebaseapp.com",
      databaseURL: "https://kwitter-app-bc277-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-bc277",
      storageBucket: "kwitter-app-bc277.appspot.com",
      messagingSenderId: "998350038410",
      appId: "1:998350038410:web:526fc0be7af3dd794dd473"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    rm_name1 = localStorage.getItem("rm_name");
    user_name1 = localStorage.getItem("u_name");
    function getData() { firebase.database().ref("/"+rm_name1).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
//function getData() { 
/*firebase.database().ref("/"+rm_name1).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;*/
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message1 = message_data['message'];
like1 = message_data['like'];
namewithtag = "<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
messagetag = "<h4 class='message_h4'>"+message1+"</h4>";
likebutton = "<button class='btn btn-warning' id="+firebase_message_id+" value=" +like1+" onclick='updateLike(this.id)'>";
spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like1+"</span></button><hr>";
row = namewithtag+ messagetag+ likebutton+ spanwithtag;
document.getElementById("output").innerHTML+=row;
      } });  }); }
      getData();
      function updateLike(message_id) {
            console.log("clicked on the like button"+message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            update_likes = Number(likes)+1;
            console.log("Likes updated"+update_likes);
            firebase.database().ref(rm_name1).child(message_id).update({
                  like: update_likes
            })
      }

function logoutBtn() {
      localStorage.removeItem("u_name");
      localStorage.removeItem("rm_name");
      window.location= "index.html";
}
function sendBtn() {
      msg1 = document.getElementById("msg").value;
      firebase.database().ref(rm_name1).push({
            name: user_name1,
            message: msg1,
            like: 0
      })
      document.getElementById("msg").value="";
}




