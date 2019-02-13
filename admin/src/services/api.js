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
      .then((res) => res.docs.map((doc) => doc.data()))

  fetchCountEvents = (lastId = '', limit = 15) =>
    this.fb
      .firestore()
      .collection('events')
      .limitToFirst(limit)
      .startAt(lastId)
      .get()
      .then((res) => res.docs.map((doc) => doc.data()))
}

export default new ApiService()
