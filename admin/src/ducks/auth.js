import {appName} from '../config'
import {Record} from 'immutable'
import {createSelector} from 'reselect'
import {takeEvery, call, put, all, select} from 'redux-saga/effects'
import api from '../services/api'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`
export const AUTH_STATE_CHANGE = `${prefix}/AUTH_STATE_CHANGE`
export const CLEAR_AUTH_ATTEMPT_COUNTER = `${prefix}/CLEAR_AUTH_ATTEMPT_COUNTER`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    user: null,
    signInAttemptCount: 0
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
        case AUTH_STATE_CHANGE:
            return state.merge({
                user: payload.user,
                signInAttemptCount: 0
            })
        case SIGN_IN_ERROR:
            return state.merge({
                user: null,
                signInAttemptCount: state.get('signInAttemptCount') + 1
            })
        case CLEAR_AUTH_ATTEMPT_COUNTER:
            return state.set('signInAttemptCount', 0)
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const userSelector = (state) => state[moduleName].user
export const isAuthorizedSelector = createSelector(
    userSelector,
    (user) => !!user
)
export const isAllowedToSignInSelector = (state) => state[moduleName].signInAttemptCount <= 3

/**
 * Init logic
 */

export function init(store) {
    api.onAuthStateChanged((user) => {
        store.dispatch({
            type: AUTH_STATE_CHANGE,
            payload: {user}
        })
    })
}

/**
 * Action Creators
 * */
export function signIn(email, password) {
    return {
        type: SIGN_IN_REQUEST,
        payload: {email, password}
    }
}

export function signUp(email, password) {
    return {
        type: SIGN_UP_REQUEST,
        payload: {email, password}
    }
}

/**
 * Sagas
 */

export function* signInSaga({payload: {email, password}}) {
    try {
        const user = yield call(api.signIn, email, password)

        yield put({
            type: SIGN_IN_SUCCESS,
            payload: {user}
        })
    } catch (error) {
        yield put({
            type: SIGN_IN_ERROR,
            error
        })

        const isAllowedToSingInSelector = yield select(isAllowedToSignInSelector);
        if (!isAllowedToSingInSelector) {
            yield new Promise(resolve => setTimeout(resolve, 60000));

            yield put({type: CLEAR_AUTH_ATTEMPT_COUNTER})
        }
    }
}

export function* signUpSaga({payload: {email, password}}) {
    try {
        const user = yield call(api.signUp, email, password)

        yield put({
            type: SIGN_UP_SUCCESS,
            payload: {user}
        })
    } catch (error) {
        yield put({
            type: SIGN_UP_ERROR,
            error
        })
    }
}

export function* saga() {
    yield all([
        takeEvery(SIGN_IN_REQUEST, signInSaga),
        takeEvery(SIGN_UP_REQUEST, signUpSaga)
    ])
}
