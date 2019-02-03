import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'react-advanced-8a160';

const config = {
  apiKey: "AIzaSyBDu9AGvorUWmw1OMN5a_HkO3Fb_SaH6zo",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "761182649404"
};

firebase.initializeApp(config);
