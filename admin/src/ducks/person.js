import {List, Record} from 'immutable'
import {appName} from '../config'
import {createSelector} from 'reselect'

/**
 * Constants
 * */
export const moduleName = 'person'
const prefix = `${appName}/${moduleName}`

export const ADD_PERSON = `${prefix}/ADD_PERSON`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    peopleList: List()
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case ADD_PERSON:
            return state.set('peopleList', state.peopleList.push(payload.person))
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const rootSelector = ({person}) => person
export const personSelector = createSelector(
    rootSelector,
    (person) => {
        return person.peopleList.toArray()

    }
)

/**
 * Action Creators
 * */

export function addPerson(firstName, secondName, email) {
    return (dispatch) => {
        dispatch({
            type: ADD_PERSON,
            payload: {person: {firstName, secondName, email}}
        })
    }
}
