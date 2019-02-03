import {Record} from 'immutable'
import firebase from 'firebase/app'
import {appName} from '../config'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_START = `${prefix}/SIGN_IN_START`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`

export const SIGN_UP_START = `${prefix}/SIGN_UP_START`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    user: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return state.set('user', payload.user)
        default:
            return state
    }
}

/**
 * Selectors
 * */
export const getUser = state => state.auth.user

/**
 * Action Creators
 * */

export function signIn(email, password) {
    return async (dispatch) => {
        dispatch({
            type: SIGN_IN_START
        })

        const user = await firebase.auth().signInWithEmailAndPassword(email, password)

        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: { user }
        })
    }
}

export function signUp(email, password) {
    return async (dispatch) => {
        dispatch({
            type: SIGN_UP_START
        })

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)

        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: { user }
        })
    }
}

/**
 * Init
 **/

firebase.auth().onAuthStateChanged((user) => {
    console.log('--- user', user)
})
