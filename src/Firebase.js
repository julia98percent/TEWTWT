import * as firebase from "firebase";
let database;
let config = {
  apiKey: "AIzaSyDN9z7bPdSMV2F6f8cj176pM53IAeLArtU",
  authDomain: "tewtwt-cabe4.firebaseapp.com",
  projectId: "tewtwt-cabe4",
  storageBucket: "tewtwt-cabe4.appspot.com",
  messagingSenderId: "1034663187007",
  appId: "1:1034663187007:web:376366f1bb8ef303301e8a",
};

export const fire = () => {
  if (!firebase.app.length) {
    firebase.initializeApp(config);
  }
  database = firebase.database();
};
