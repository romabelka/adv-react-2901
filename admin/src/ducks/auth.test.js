import { put, call, take } from 'redux-saga/effects'

import api from '../services/api'
import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_LIMIT_WRONG_PERMISSION,
  signUpSaga,
  signInSaga
} from './auth'

describe('Auth', () => {
  let user

  beforeEach(() => {
    user = {
      email: 'test@test.com',
      password: '12345678'
    }
  })

  describe('Sign Up', () => {
    let action

    beforeEach(() => {
      action = {
        type: SIGN_UP_REQUEST,
        payload: user
      }
    })

    it('Should sign up', () => {
      const gen = signUpSaga(action)

      expect(gen.next().value).toEqual(
        call(api.signUp, user.email, user.password)
      )

      expect(gen.next(user).value).toEqual(
        put({
          type: SIGN_UP_SUCCESS,
          payload: { user }
        })
      )
    })

    it('Should be an request error', () => {
      const gen = signUpSaga(action)
      const error = new Error('We have some problem')

      expect(gen.next().value).toEqual(
        call(api.signUp, user.email, user.password)
      )

      expect(gen.throw(error).value).toEqual(
        put({
          type: SIGN_UP_ERROR,
          error
        })
      )
    })
  })

  describe('Sign In', () => {
    it('Should sign in', () => {
      const gen = signInSaga()

      expect(gen.next().value).toEqual(take(SIGN_IN_REQUEST))

      expect(gen.next({ payload: user }).value).toEqual(
        call(api.signIn, user.email, user.password)
      )

      expect(gen.next(user).value).toEqual(
        put({
          type: SIGN_IN_SUCCESS,
          payload: { user }
        })
      )
    })

    it('Should show message error', () => {
      const gen = signInSaga()
      const error = new Error('We have some problem')

      for (let i = 0; i < 3; i++) {
        expect(gen.next().value).toEqual(take(SIGN_IN_REQUEST))

        expect(gen.next({ payload: user }).value).toEqual(
          call(api.signIn, user.email, user.password)
        )

        expect(gen.throw(error).value).toEqual(
          put({
            type: SIGN_IN_ERROR,
            error
          })
        )
      }

      expect(gen.next().value).toEqual(
        put({
          type: SIGN_IN_LIMIT_WRONG_PERMISSION
        })
      )
    })
  })
})
