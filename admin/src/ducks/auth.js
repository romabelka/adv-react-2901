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

export const AUTH_USER = `${prefix}/AUTH_USER`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    user: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case AUTH_USER:
            return state.set('user', payload.user)
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const userSelector = (state) => state.auth.user

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
            type: SIGN_IN_SUCCESS
        })
        dispatch(authUser(user))
    }
}

export function signUp(email, password) {
    return async (dispatch) => {
        dispatch({
            type: SIGN_UP_START
        })

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)

        dispatch({
            type: SIGN_UP_SUCCESS
        })
        dispatch(authUser(user))
    }
}

export function authUser(user) {
    return (dispatch) => {
        dispatch({
            type: AUTH_USER,
            payload: { user }
        })
    }
}

export function verifyAuth() {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser(user))
            }
        })
    }
}
