import firebase from "firebase/app";
import "firebase/auth";

export const appName = "react-course-snayps";

const config = {
  apiKey: "AIzaSyC37ThRYuN5AoU_llgGleZypG1P8NtcdoI",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "103916173970"
};

firebase.initializeApp(config);
