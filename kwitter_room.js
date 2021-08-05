// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkyuDzZjPwMR3FFDmrNqDnAoUUFtn65Y4",
  authDomain: "kwitter-remodel.firebaseapp.com",
  databaseURL: "https://kwitter-remodel-default-rtdb.firebaseio.com",
  projectId: "kwitter-remodel",
  storageBucket: "kwitter-remodel.appspot.com",
  messagingSenderId: "1089149595386",
  appId: "1:1089149595386:web:cbda58b0cdbc85817ea343"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome - " +user_name+ "!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row ="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
   });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "Adding Roomname"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}