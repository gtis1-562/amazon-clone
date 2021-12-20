var firebaseConfig = {
    apiKey: "AIzaSyDdKS-Z_5Fwo2OWK6P1a-2Z0ZUAfV-YliY",
    authDomain: "clone-two-50bc9.firebaseapp.com",
    projectId: "clone-two-50bc9",
    storageBucket: "clone-two-50bc9.appspot.com",
    messagingSenderId: "595705331561",
    appId: "1:595705331561:web:21251a20b9c4d5f536c7f8",
    measurementId: "G-CQ4JT346RN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();