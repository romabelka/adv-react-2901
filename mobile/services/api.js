import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

class ApiService {
    fb = firebase
    constructor() {
        const appName = 'adv-react-29-01'

        const config = {
            apiKey: 'AIzaSyD3RIBQ59em4ZGOdRLQpS1velxhcgImTeI',
            authDomain: `${appName}.firebaseapp.com`,
            databaseURL: `https://${appName}.firebaseio.com`,
            projectId: appName,
            storageBucket: `${appName}.appspot.com`,
            messagingSenderId: '832921987414'
        }

        firebase.initializeApp(config)
    }

    signIn = (email, password) =>
        this.fb.auth().signInWithEmailAndPassword(email, password)

    fetchAllByEntityName = name =>
        this.fb
            .firestore()
            .collection(name)
            .get()
            .then(resToEntities)

    fetchAllEvents = () => this.fetchAllByEntityName('events')


    fetchAllPeople = () => this.fetchAllByEntityName('people')

}

function resToEntities(res) {
    return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export default new ApiService()
