import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'adv-react-29-01-9211b'

const config = {
    apiKey: "AIzaSyBM1x37CJgFd5i1z9RZWtHNwZdlhN_YXjo",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "476036167607"
}

firebase.initializeApp(config)
