import { put, call, select, delay } from 'redux-saga/effects'
import {
  signInSaga,
  signInErrorSaga,
  signIn,
  signInSuccess,
  signInError,
  tooManySignInAttempts,
  SIGN_IN_ATTEMPT_COUNT_INC,
  SIGN_IN_ATTEMPT_COUNT_RESET
} from './auth'
import api from '../services/api'

describe('Auth', () => {
  it('should successfully sign in user', () => {
    const user = {
      id: 42,
      name: 'John Doe'
    }
    const email = 'john.doe@example.com'
    const password = 'joHNdoE'
    const action = signIn(email, password)

    const gen = signInSaga(action)

    expect(gen.next().value).toEqual(call(api.signIn, email, password))

    expect(gen.next(user).value).toEqual(put(signInSuccess(user)))

    expect(gen.next(false).done).toBe(true)
  })

  it('should fail to sign in user', () => {
    const error = new Error('something happened')
    const email = 'john.doe@example.com'
    const password = 'joHNdoE'
    const action = signIn(email, password)

    const gen = signInSaga(action)

    expect(gen.next().value).toEqual(call(api.signIn, email, password))

    expect(gen.throw(error).value).toEqual(put(signInError(error)))

    expect(gen.next(false).done).toBe(true)
  })

  it('should increment failed attempt count', () => {
    const action = signInError({})

    const gen = signInErrorSaga(action)

    expect(gen.next().value).toEqual(put({ type: SIGN_IN_ATTEMPT_COUNT_INC }))

    expect(gen.next().value).toEqual(select(tooManySignInAttempts))

    expect(gen.next(false).done).toBe(true)
  })

  it('should reset failed attempt count', () => {
    const action = signInError({})

    const gen = signInErrorSaga(action)

    expect(gen.next().value).toEqual(put({ type: SIGN_IN_ATTEMPT_COUNT_INC }))

    expect(gen.next().value).toEqual(select(tooManySignInAttempts))

    expect(gen.next(true).value).toEqual(delay(3000))

    expect(gen.next(true).value).toEqual(
      put({ type: SIGN_IN_ATTEMPT_COUNT_RESET })
    )

    expect(gen.next(false).done).toBe(true)
  })
})
