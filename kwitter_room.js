// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE
    welcome_name = localStorage.getItem("u_name");
    document.getElementById("welcome").innerHTML="welcome"+ welcome_name;

    function addRoom() {
      r_name = document.getElementById("addroom").value;
      firebase.database().ref("/").child(r_name).update({
        purpose: "adding new room"
      })
      localStorage.setItem("rm_name", r_name);
      window.location= "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names" + Room_names);
      row= "<div class='roomname' id="+ Room_names+" onclick='redirect_to_room(this.id)' >"+ Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirect_to_room(Name) {
  console.log(Name);
  localStorage.setItem("rm_name", Name);
  window.location= "kwitter_page.html";
}
function logoutBtn() {
  localStorage.removeItem("u_name");
  localStorage.removeItem("rm_name");
  window.location= "index.html";
}