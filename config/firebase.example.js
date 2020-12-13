import * as firebase from 'firebase'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "your-apikey",
    authDomain: "your-authdomain",
    projectId: "your-projectId",
    storageBucket: "your-storageBucket",
    messagingSenderId: "your-messagingSenderId",
    appId: "your-appId"
  };
  // Initialize Firebase
  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
