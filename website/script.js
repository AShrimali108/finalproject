  // Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApGU9_NFjyYIalYZNw7VCEZACt-AAA3Gg",
  authDomain: "patan-b13d7.firebaseapp.com",
  projectId: "patan-b13d7",
  storageBucket: "patan-b13d7.appspot.com",
  messagingSenderId: "784783567457",
  appId: "1:784783567457:web:2fa0fa5c5f34f431075820",
  measurementId: "G-WG6DNLD5JE"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function signup(){
    debugger;
    var _email = document.getElementById("email");
    var _password = document.getElementById("pwd");
    
     firebase.database().ref("user").set({
     email:_email.value,
     password:_password.value
      });

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
    window.location.href = "myweb.html";    

  }

  function login(){
    debugger;
    var _email = document.getElementById("email");
    var _password = document.getElementById("pwd");
    
    
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(_email.value,_password.value);
     promise.catch(e => alert(e.message));
     alert("signed in " +  email.value);
window.location.href = "ayurvedic.html";    
}

