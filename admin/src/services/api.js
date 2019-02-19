import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

class ApiService {
  fb = firebase

  signIn = (email, password) =>
    this.fb.auth().signInWithEmailAndPassword(email, password)
  signUp = (email, password) =>
    this.fb.auth().createUserWithEmailAndPassword(email, password)

  onAuthStateChanged = (callback) => this.fb.auth().onAuthStateChanged(callback)

  fetchAllEvents = () =>
    this.fb
      .firestore()
      .collection('events')
      .get()
      .then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  fetchLazyEvents = (id) =>
    this.fb
      .firestore()
      .collection('events')
      .orderBy('title')
      .startAfter(id ? id : '')
      .limit(10)
      .get()
      .then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  loadAllPeople = () =>
    this.fb
      .firestore()
      .collection('people')
      .get()
      .then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  addPerson = (person) =>
    this.fb
      .firestore()
      .collection('people')
      .add(person)

  addPersonToEvent = (eventId, peopleIds) =>
    this.fb
      .firestore()
      .collection('events')
      .doc(eventId)
      .update({ peopleIds })
}

export default new ApiService()
