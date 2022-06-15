var firebaseConfig = {
      apiKey: "AIzaSyAQrEjPOf-bQSXmKOPO6e5Q3TkY3c1GN98",
      authDomain: "echat-website-edition.firebaseapp.com",
      databaseURL: "https://echat-website-edition-default-rtdb.firebaseio.com",
      projectId: "echat-website-edition",
      storageBucket: "echat-website-edition.appspot.com",
      messagingSenderId: "340073589780",
      appId: "1:340073589780:web:da0aec0a06230656260b01"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            
      //End code
      });});}
getData();
