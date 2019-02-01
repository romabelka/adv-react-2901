import {Record} from 'immutable'
const appName = 'adv-react'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const CONST_EXAMPLE = `${prefix}/CONST_EXAMPLE`

/**
 * Reducer
 * */
export const ReducerRecord = Record({

})

export default function reducer(state = new ReducerRecord(), action) {
    const {type} = action

    switch (type) {
        default:
            return state
    }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */

