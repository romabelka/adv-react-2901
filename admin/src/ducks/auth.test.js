import { call, put } from 'redux-saga/effects'
import {
  saga,
  signInSaga,
  signUpSaga,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from './auth'
import api from '../services/api'

describe('Auth', () => {
  it('should signIn', () => {
    const credentials = {
      email: 'user@mail.com',
      password: 'password'
    }
    const action = {
      type: SIGN_IN_REQUEST,
      payload: credentials
    }
    const gen = signInSaga(action)
    expect(gen.next().value).toEqual(
      call(api.signIn, credentials.email, credentials.password)
    )
    let user = { user: 'user@mail.com' }
    expect(gen.next(user).value).toEqual(
      put({
        type: SIGN_IN_SUCCESS,
        payload: { user }
      })
    )
    expect(gen.next().done).toBe(true)
  })

  it('should signUp', () => {
    const credentials = {
      email: 'user@mail.com',
      password: 'password'
    }
    const action = {
      type: SIGN_UP_REQUEST,
      payload: credentials
    }
    const gen = signUpSaga(action)
    expect(gen.next().value).toEqual(
      call(api.signUp, credentials.email, credentials.password)
    )
    let user = { user: 'user@mail.com' }
    expect(gen.next(user).value).toEqual(
      put({
        type: SIGN_UP_SUCCESS,
        payload: { user }
      })
    )
    expect(gen.next().done).toBe(true)
  })
})
