import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'adv-react-29-01'

const config = {
    apiKey: "AIzaSyDpSawbqegA5phH76jzcYeIXbDx3OW15Co",
    authDomain: "react-adv-d6603.firebaseapp.com",
    databaseURL: "https://react-adv-d6603.firebaseio.com",
    projectId: "react-adv-d6603",
    storageBucket: "react-adv-d6603.appspot.com",
    messagingSenderId: "997818573207"
}

firebase.initializeApp(config)
