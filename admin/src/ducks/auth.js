import { appName } from '../config'
import { Record } from 'immutable'
import { createSelector } from 'reselect'
import { takeEvery, call, put, all, take } from 'redux-saga/effects'
import api from '../services/api'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`
export const AUTH_STATE_CHANGE = `${prefix}/AUTH_STATE_CHANGE`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  user: null,
  error: null
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action

  switch (type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case AUTH_STATE_CHANGE:
      return state.set('user', payload.user)
    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
      return state.set('error', payload)
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const userSelector = (state) => state[moduleName].user
export const errorSelector = (state) => state[moduleName].error
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

export function signUp(email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { email, password }
  }
}

/**
 * Sagas
 */

export function* signInSaga() {
  for (let i = 0; i < 3; i++) {
    const {
      payload: { email, password }
    } = yield take(SIGN_IN_REQUEST)

    try {
      const user = yield call(api.signIn, email, password)

      yield put({
        type: SIGN_IN_SUCCESS,
        payload: { user }
      })
      i = 0
    } catch (error) {
      yield put({
        type: SIGN_IN_ERROR,
        error
      })
    }
  }

  yield put({
    type: SIGN_IN_ERROR,
    payload: 'You can not sign in'
  })
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
  yield all([signInSaga(), takeEvery(SIGN_UP_REQUEST, signUpSaga)])
}
