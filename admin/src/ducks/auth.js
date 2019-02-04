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

export const GOT_NO_AUTH = `${prefix}/GOT_NO_AUTH`

export const NO_AUTH = `NO_AUTH`
export const AUTH_PENDING = `AUTH_PENDING`
export const AUTH_DONE = `AUTH_DONE`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    user: null,
    authStatus: AUTH_PENDING
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case SIGN_IN_START:
        case SIGN_UP_START:
            return state.merge({authStatus: AUTH_PENDING})
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return state.merge({user: payload.user, authStatus: AUTH_DONE})
        case GOT_NO_AUTH:
            return state.merge({user: null, authStatus: NO_AUTH})
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const getUser = state => state.auth.user;
export const getAuthStatus = state => state.auth.authStatus;

/**
 * Action Creators
 * */

export function initAuth() {
    return function (dispatch) {
        dispatch({
            type: SIGN_IN_START
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: {user}
                })
            } else {
                dispatch({
                    type: GOT_NO_AUTH
                })
            }
        })
    }
}

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

