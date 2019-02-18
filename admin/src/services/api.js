import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const fb = firebase
const fs = fb.firestore()

class ApiService {
  events = fs.collection('events')
  people = fs.collection('people')

  signIn = (email, password) =>
    fb.auth().signInWithEmailAndPassword(email, password)
  signUp = (email, password) =>
    fb.auth().createUserWithEmailAndPassword(email, password)

  onAuthStateChanged = (callback) => fb.auth().onAuthStateChanged(callback)

  fetchAllEvents = async () => {
    const { docs } = await this.events.get()

    return docs.map((doc) => doc.data())
  }

  fetchLazyEvents = async (id = '') => {
    const { docs } = await this.events
      .orderBy('title')
      .startAfter(id)
      .limit(10)
      .get()

    return docs.map((doc) => doc.data())
  }

  fetchPeople = async () => {
    const { docs } = await this.people.get()

    return docs.map((doc) => doc.data())
  }

  createPerson = ({ email, firstName, lastName }) =>
    this.people.add({ email, firstName, lastName })
}

export default new ApiService()
