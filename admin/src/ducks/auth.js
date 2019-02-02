import { Record } from 'immutable'
import firebase from 'firebase/app'
import { createSelector } from 'reselect';

import {appName} from '../config'

/**
 * Constants
 * */
export const moduleName = 'auth';
const prefix = `${appName}/${moduleName}`;

export const SIGN_IN_START = `${prefix}/SIGN_IN_START`;
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`;

export const SIGN_UP_START = `${prefix}/SIGN_UP_START`;
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`;

export const AUTH_USER = `${prefix}/AUTH_USER`;
export const SIGN_OUT_USER = `${prefix}/SIGN_OUT_USER`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    user: null,
    isUserAuth: null,
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;

    switch (type) {
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return state.set('user', payload.user);
        case AUTH_USER:
            return state.set('isUserAuth', true);
        case SIGN_OUT_USER:
            return state.set('isUserAuth', false);
        default:
            return state
    }
}

/**
 * Selectors
 * */

const authReducer = store => store.auth;

export const isAuth = createSelector(authReducer, i => i.isUserAuth);

/**
 * Action Creators
 * */

export function signIn(email, password) {
    return async (dispatch) => {
        dispatch({
            type: SIGN_IN_START
        });

        const user = await firebase.auth().signInWithEmailAndPassword(email, password);

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
        });

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);

        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: { user }
        })
    }
}

export function signOut() {
    return async (dispatch) => {
        await firebase.auth().signOut()
          .then(
            () => localStorage.removeItem('token'),
            error => console.log(error),
          )

        dispatch({
            type: SIGN_OUT_USER
        })
    }
}

export function verifyAuth() {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                localStorage.setItem('token', user.uid)
                dispatch({
                    type: AUTH_USER,
                });
            } else {
                localStorage.removeItem('token')
                dispatch({
                    type: SIGN_OUT_USER,
                });
            }
        });
    }
}
