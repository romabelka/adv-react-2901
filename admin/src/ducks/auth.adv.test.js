import { recordSaga } from './utils'
import {
  signInSaga,
  signInErrorSaga,
  signInError,
  signInRequest,
  signInSuccess,
  SIGN_IN_ATTEMPT_COUNT_INC,
  SIGN_IN_ATTEMPT_COUNT_RESET,
  moduleName,
  ReducerRecord,
  MAX_SIGN_IN_ATTEMPT_COUNT
} from './auth'
import api from '../services/api'

describe('Auth', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should successfully sign in user', async () => {
    const email = 'john.doe@example.com'
    const password = 'joHNdoE'
    const initialAction = signInRequest(email, password)
    const user = {
      id: 42,
      name: 'John Doe'
    }

    api.signIn = jest
      .fn()
      .mockImplementation((email, password) => Promise.resolve(user))
    const dispatched = await recordSaga(signInSaga, initialAction)

    expect(api.signIn).toHaveBeenCalledWith(email, password)
    expect(dispatched).toContainEqual(signInSuccess(user))
  })

  it('should emit sign in error', async () => {
    const error = new Error('something happened')
    const email = 'john.doe@example.com'
    const password = 'joHNdoE'
    const initialAction = signInRequest(email, password)

    api.signIn = jest
      .fn()
      .mockImplementation((email, password) => Promise.reject(error))
    const dispatched = await recordSaga(signInSaga, initialAction)

    expect(api.signIn).toHaveBeenCalledWith(email, password)
    expect(dispatched).toContainEqual(signInError(error))
  })

  it('should increment failed attempt count', async () => {
    const initialAction = signInError(new Error('something happened'))
    const initialState = { [moduleName]: new ReducerRecord() }

    const dispatched = await recordSaga(
      signInErrorSaga,
      initialAction,
      initialState
    )

    expect(dispatched).toContainEqual({ type: SIGN_IN_ATTEMPT_COUNT_INC })
  })

  // it('should reset sign in errors count', async () => {
  //   const initialAction = signInError(new Error('something happened'))
  //   const initialState = { [moduleName]: new ReducerRecord({ signInAttemptCount: MAX_SIGN_IN_ATTEMPT_COUNT + 1 }) }
  //   delay.mockImplementation(() => Promise.resolve())

  //   const dispatched = await recordSaga(signInErrorSaga, initialAction, initialState)

  //   expect(dispatched).toContainEqual({ type: SIGN_IN_ATTEMPT_COUNT_INC })
  //   expect(dispatched).toContainEqual({ type: SIGN_IN_ATTEMPT_COUNT_RESET })
  // })
})
