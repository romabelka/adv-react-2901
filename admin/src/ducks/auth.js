import { Record } from 'immutable'
import { reset } from 'redux-form'
import { all, call, delay, put, select, takeEvery } from 'redux-saga/effects'
import { createSelector } from 'reselect'

import { appName } from '../config'
import api from '../services/api'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`
export const SIGN_IN_ERROR_CLEAR = `${prefix}/SIGN_IN_ERROR_CLEAR`
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`
export const AUTH_STATE_CHANGE = `${prefix}/AUTH_STATE_CHANGE`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  user: null,
  error: null,
  errorCount: null
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload, error } = action

  switch (type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case AUTH_STATE_CHANGE:
      return state.merge({
        user: payload.user,
        errorCount: 0
      })

    case SIGN_IN_ERROR:
      return state.merge({
        error: error,
        errorCount: state.get('errorCount') + 1
      })

    case SIGN_IN_ERROR_CLEAR:
      return state.set('errorCount', 0)

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

export const errorSelector = (state) => state[moduleName].error
// export const isErrorSelector = createSelector(
//   errorSelector,
//   (error) => !!error
// )

export const errorCountSelector = (state) => state[moduleName].errorCount
export const errorCountClearSelector = (state) =>
  (state[moduleName].errorCount = 0)

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
export function* signUpSaga({ payload: { email, password } }) {
  try {
    const user = yield call(api.signUp, email, password)

    yield put({
      type: SIGN_UP_SUCCESS,
      payload: { user }
    })

    yield put(reset('sign-up'))
  } catch (error) {
    yield put({
      type: SIGN_UP_ERROR,
      error
    })
  }
}

export function* signInSaga({ payload: { email, password } }) {
  try {
    const user = yield call(api.signIn, email, password)

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { user }
    })
  } catch (error) {
    yield put({
      type: SIGN_IN_ERROR,
      error
    })
  }

  const tooManyAttempts = yield select(errorCountSelector)

  if (tooManyAttempts > 3) {
    yield delay(60000)
    yield put({ type: SIGN_IN_ERROR_CLEAR })
  }
}

export function* saga() {
  yield all([
    takeEvery(SIGN_IN_REQUEST, signInSaga),
    takeEvery(SIGN_UP_REQUEST, signUpSaga)
  ])
}
