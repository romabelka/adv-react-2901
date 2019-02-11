import { Record, List } from 'immutable'
import { appName } from '../config'
import api from '../services/api'
//import firebase from 'firebase/app'
import firebase from 'firebase'

import 'firebase/firestore'

export const moduleName = 'events'
const prefix = `${appName}/${moduleName}`

export const LOAD_EVENTS = `${prefix}/LOAD_EVENTS`

export default function reducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case LOAD_EVENTS:
      return payload.events

    default:
      return state
  }
}

export async function loadEventsCollection(store) {
  const snapshot = await firebase
    .firestore()
    .collection('events')
    .get()
  let events = []
  snapshot.forEach((doc) => events.push(doc.data()))
  console.log(events)
  store.dispatch({
    type: LOAD_EVENTS,
    payload: { events }
  })
}
