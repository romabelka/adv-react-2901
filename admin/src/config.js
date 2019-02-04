import firebase from "firebase/app";
import "firebase/auth";

export const appName = "adv-react-29-01-14b14";

const config = {
  apiKey: "AIzaSyAR0yY_c_THqBz0gK6b5QjQGifcs70P53M",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "102481024417"
};

firebase.initializeApp(config);
