import firebase from 'firebase'

const config= {
    apiKey: "AIzaSyCMk9kcq1VKpjXKQ0yJE3MABb9qCnzwZYk",
    authDomain: "kutuki-prep.firebaseapp.com",
    projectId: "kutuki-prep",
    storageBucket: "kutuki-prep.appspot.com",
    messagingSenderId: "692997817421",
    appId: "1:692997817421:web:8b3ae2855a422ef21c8804"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase