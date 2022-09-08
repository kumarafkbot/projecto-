
const firebaseConfig = {
      apiKey: "AIzaSyCmuNP84CDLpOYd6lZkiH781VPpmjAfHik",
      authDomain: "practice-ac-94-b832b.firebaseapp.com",
      databaseURL: "https://practice-ac-94-b832b-default-rtdb.firebaseio.com",
      projectId: "practice-ac-94-b832b",
      storageBucket: "practice-ac-94-b832b.appspot.com",
      messagingSenderId: "275738552177",
      appId: "1:275738552177:web:9c122487813ffcd1c8f8d0",
      measurementId: "G-VGPX4NB7XX"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location ="index.html"
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
