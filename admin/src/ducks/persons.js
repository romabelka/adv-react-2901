import {Record, List} from 'immutable'
import {appName} from '../config'
import {reset} from 'redux-form';



/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const PERSON_SAVED = `${prefix}/PERSON_SAVED`

/**
 * Reducer
 * */

export const PersonRecord = new Record({
    id: null,
    firstName: null,
    secondName: null,
    email: null
})

export const StateRecord = new Record({
    personsList: new List()
})

export default function reducer(state = new StateRecord(), action) {
    const {type, payload} = action;

    switch (type) {
        case PERSON_SAVED:
            const personRecord = new PersonRecord({id: state.size + 1, ...payload.personData})
            return {personsList: state.personsList.push(personRecord)};
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const getPersons = state => state.persons.personsList


/**
 * Action Creators
 * */

export function savePerson(personData) {
    return function(dispatch) {
        dispatch({
            type: PERSON_SAVED,
            payload: {personData}
        })
        dispatch(reset('add-person'))
    }
}
