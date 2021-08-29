var firebaseConfig = {
      apiKey: "AIzaSyCQ3N9xtTU2ICrEXHTBMBpl5fWQ1r8N1Aw",
      authDomain: "sns123-d5275.firebaseapp.com",
      databaseURL: "https://sns123-d5275-default-rtdb.firebaseio.com",
      projectId: "sns123-d5275",
      storageBucket: "sns123-d5275.appspot.com",
      messagingSenderId: "625403321769",
      appId: "1:625403321769:web:7de97d7f3ad25e276d78b8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
//class ="good" :) i used firebase again after a long time

 user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addRoom()
{
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
});
});}
      //End code

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="https://matthewjohn510.github.io/kwitterroomlogin/";
}