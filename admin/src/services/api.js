import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const fb = firebase
const fs = fb.firestore()
const reduceDocs = (res, doc) => ({ ...res, [doc.id]: doc.data() })

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

    return docs.reduce(reduceDocs, {})
  }

  fetchLazyEvents = async (id = '') => {
    const { docs } = await this.events
      .orderBy('title')
      .startAfter(id)
      .limit(10)
      .get()

    return docs.reduce(reduceDocs, {})
  }

  fetchPeople = async () => {
    const { docs } = await this.people.get()

    return docs.reduce(reduceDocs, {})
  }

  createPerson = ({ email, firstName, lastName }) =>
    this.people.add({ email, firstName, lastName })

  addPersonToEvent = async (eventId, people) => {
    const eventRef = this.events.doc(eventId)
    const event = await eventRef.get()

    if (!event.exists) {
      return
    }

    return eventRef.update({ people })
  }

  removePerson = (id) => this.people.doc(id).delete()

  removeEvent = (id) => this.events.doc(id).delete()
}

export default new ApiService()
