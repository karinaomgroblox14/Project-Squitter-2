
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBRg3JnfjV9Mz0JFsTi86JrJQbwAO6UYiY",
      authDomain: "kwitter-750a1.firebaseapp.com",
      projectId: "kwitter-750a1",
      storageBucket: "kwitter-750a1.appspot.com",
      messagingSenderId: "811377002782",
      appId: "1:811377002782:web:89555926d5a764cbfe610f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();

function addUser(){
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
      });
      }
      