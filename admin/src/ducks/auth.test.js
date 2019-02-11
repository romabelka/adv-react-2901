import { reset } from 'redux-form'
import { call, put, take } from 'redux-saga/effects'

import api from '../services/api'
import {
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  signIn,
  signInSaga,
  signUp,
  signUpSaga
} from './auth'

describe('Sign In', () => {
  const user = {
    email: 'test@example.com',
    password: 'testpass'
  }

  const action = {
    type: SIGN_IN_REQUEST,
    payload: user
  }

  it('should sign in', () => {
    const email = user.email
    const password = user.password

    const gen = signInSaga(action)

    expect(gen.next(user).value).toEqual(call(api.signIn, email, password))

    expect(gen.next({ email, password }).value).toEqual(
      put({
        type: SIGN_IN_SUCCESS,
        payload: { user }
      })
    )

    expect(gen.next().done).toBe(true)
  })

  it('Should be error when wrong sign in data', () => {
    const gen = signInSaga(action)

    const error = 'some error'

    expect(gen.next(user).value).toEqual(
      call(api.signIn, user.email, user.password)
    )

    expect(gen.throw(error).value).toEqual(put({ type: SIGN_IN_ERROR, error }))
  })
})

describe('Sign Up', () => {
  const user = {
    email: 'test@example.com',
    password: 'testpass'
  }

  const action = {
    type: SIGN_UP_REQUEST,
    payload: user
  }

  it('Should Sign Up', () => {
    const gen = signUpSaga(action)

    expect(gen.next(user).value).toEqual(
      call(api.signUp, user.email, user.password)
    )

    expect(gen.next(user).value).toEqual(
      put({ type: SIGN_UP_SUCCESS, payload: { user } })
    )

    expect(gen.next().value).toEqual(put(reset('sign-up')))

    expect(gen.next().done).toBe(true)
  })

  it('Should be error when sign up false', () => {
    const gen = signUpSaga(action)

    const error = 'some error'

    expect(gen.next(user).value).toEqual(
      call(api.signUp, user.email, user.password)
    )

    expect(gen.throw(error).value).toEqual(put({ type: SIGN_UP_ERROR, error }))
  })
})
