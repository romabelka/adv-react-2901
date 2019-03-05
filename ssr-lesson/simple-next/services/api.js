import firebase from 'firebase/app'
import 'firebase/firestore'

class ApiService {
    fb = firebase
    constructor() {
        try {
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
        } catch {
            //in dev mode after reloading FB tries to initialize the same app
        }
    }

    fetchAllByEntityName = name =>
        this.fb
            .firestore()
            .collection(name)
            .get()
            .then(resToEntities)

    fetchAllEvents = () => this.fetchAllByEntityName('events')


    fetchAllPeople = () => this.fetchAllByEntityName('people')

    fetchPerson = async (id) => {
        const res = await this
            .fb
            .firestore()
            .collection('people')
            .doc(id)
            .get()

        return {...res.data(), id }
    }
}

function resToEntities(res) {
    return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

const service = new ApiService()
export default service

