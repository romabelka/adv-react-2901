import { Record } from 'immutable'
import firebase from 'firebase/app'
import { appName } from '../config'

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
        case START_SESSION:
            localStorage.setItem('token', payload.user.email)
            const obj = {...state, user: payload.user};
            return obj
        case END_SESSION:
            localStorage.removeItem(`token`)
            return {...state, user: ''}
        default:
            return state
    }
}

/**
 * Selectors
 * */

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

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('user signUP = ',user);

        user.getIdToken().then(idToken => {
            // Session login endpoint is queried and the session cookie is set.
            // CSRF protection should be taken into account.
            // ...
            console.log('idToken = ', idToken);
            // const csrfToken = getCookie('csrfToken')
            // return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
        });

        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: {user}
        })
    }
}

export const START_SESSION = `${prefix}/START_SESSION`
export const END_SESSION = `${prefix}/END_SESSION`

export const checkAuth = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('--- user', user)
            if (user) {
                dispatch({
                    type: START_SESSION,
                    payload: {user}
                })
            } else {
                dispatch({
                    type: END_SESSION
                });
            }
        })

    }
}
