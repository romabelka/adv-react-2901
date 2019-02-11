import { appName } from '../config'
import { Record } from 'immutable'
import { createSelector } from 'reselect'
import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import api from '../services/api'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_ATTEMPT = `${prefix}/SIGN_IN_ATTEMPT`
export const SIGN_IN_ATTEMPT_RESET = `${prefix}/SIGN_IN_ATTEMPT_RESET`
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`
export const AUTH_STATE_CHANGE = `${prefix}/AUTH_STATE_CHANGE`

export const MAX_SIGN_IN_ATTEMPT_COUNT = 2
/**
 * Reducer
 * */
export const ReducerRecord = Record({
  user: null,
  signInAttempt: 0
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action

  switch (type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case AUTH_STATE_CHANGE:
      return state.set('user', payload.user)
    case SIGN_IN_ATTEMPT:
      return state.set('signInAttempt', state.get('signInAttempt') + 1)
    case SIGN_IN_ATTEMPT_RESET:
      return state.set('signInAttempt', 0)
    default:
      return state
  }
}

export const signInAttempt = (state) => state[moduleName].signInAttempt
export const tooManySignInAttempts = createSelector(
  signInAttempt,
  (count) => count > MAX_SIGN_IN_ATTEMPT_COUNT
)

/**
 * Selectors
 * */

export const userSelector = (state) => state[moduleName].user
export const isAuthorizedSelector = createSelector(
  userSelector,
  (user) => !!user
)

/**
 * Init logic
 */

export function init(store) {
  api.onAuthStateChanged((user) => {
    store.dispatch({
      type: AUTH_STATE_CHANGE,
      payload: { user }
    })
  })
}

/**
 * Action Creators
 * */
export function signIn(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password }
  }
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    error
  }
}

export function signUp(email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { email, password }
  }
}

/**
 * Sagas
 */

export function* signInSaga({ payload: { email, password } }) {
  try {
    const user = yield call(api.signIn, email, password)

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { user }
    })
  } catch (error) {
    yield put(signInError(error))
  }
}

export function* signInErrorSaga(action) {
  yield put({ type: SIGN_IN_ATTEMPT })
  const tooManyAttempts = yield select(tooManySignInAttempts)
}

export function* signUpSaga({ payload: { email, password } }) {
  try {
    const user = yield call(api.signUp, email, password)

    yield put({
      type: SIGN_UP_SUCCESS,
      payload: { user }
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
    takeEvery(SIGN_UP_REQUEST, signUpSaga),
    takeEvery(SIGN_IN_ERROR, signInErrorSaga)
  ])
}
