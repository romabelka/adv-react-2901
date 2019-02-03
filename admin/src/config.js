import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'adv-react-03-02'

const config = {
    apiKey: "AIzaSyA1xH6ZKZDJL-OOeo7A2OMf0vimN-5kkEc",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "656401282062"
}

firebase.initializeApp(config)
