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
    
    
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("User").innerHTML = "Welcome " + user_name

function addroom() {
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -", Room_names);
      row = "<div class='room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";


}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location ="index.html"
}
