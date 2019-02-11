import {signInSaga, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR} from './auth'
import {put, call} from 'redux-saga/effects'
import api from "../services/api";

describe('Auth', function () {
    it('should sing in successfully', function () {
        const action = {
            type: SIGN_IN_REQUEST,
            payload: {
                email: 'f@mail.ru',
                password: 'f@mail.ru'
            }
        }
        const gen = signInSaga(action);

        expect(gen.next().value).toEqual(
            call(api.signIn, action.payload.email, action.payload.password)
        )

        expect(gen.next().value).toEqual(
            put({
                type: SIGN_IN_SUCCESS,
                payload: {}
            })
        )
        expect(gen.next().done).toBe(true)
    });

    it('should get error on sign in', function () {
        const action = {
            type: SIGN_IN_REQUEST,
            payload: {
                email: 'f@mail.ru',
                password: ''
            }
        }
        const gen = signInSaga(action);

        expect(gen.next().value).toEqual(
            call(api.signIn, action.payload.email, action.payload.password)
        )

        expect(gen.next().value).toEqual(
            put({
                type: SIGN_IN_ERROR,
                payload: {}
            })
        )
        expect(gen.next().done).toBe(true)
    });
});