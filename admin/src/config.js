import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'adv-react-project'

const config = {
    apiKey: "AIzaSyCeEDWQcnobnT9u4ul3QpOjvwyZwaDvntg",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "740062830940"
}

firebase.initializeApp(config)
