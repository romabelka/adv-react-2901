import { OrderedMap, Record } from 'immutable';
import { reset } from 'redux-form';
import { createSelector } from 'reselect';

import { appName } from '../config';

/**
 * Constants
 * */
export const moduleName = "users";
const prefix = `${appName}/${moduleName}`;

export const ADD_USER_START = `${prefix}/ADD_USER_START`;
export const ADD_USER_SUCCESS = `${prefix}/ADD_USER_SUCCESS`;

const randomID = () =>
	"_" +
	Math.random()
		.toString(36)
		.substr(2, 9);

/**
 * Reducer
 * */
export const ReducerRecord = Record({
	users: new OrderedMap({})
});

export const UserRecord = Record({
	id: null,
	firstname: null,
	lastname: null,
	email: null
});

export default function reducer(state = new ReducerRecord(), action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_USER_SUCCESS:
			return state.setIn(["users", payload.id], new UserRecord(payload));
		default:
			return state;
	}
}

/**
 * Selectors
 * */

export const rootSelector = state => state.users;

export const usersListSelector = createSelector(
	rootSelector,
	items => items !== null && items.users.valueSeq().toArray()
);

/**
 * Action Creators
 * */

export function addUser(firstname, lastname, email) {
	return async dispatch => {
		dispatch({
			type: ADD_USER_START
		});

		dispatch({
			type: ADD_USER_SUCCESS,
			payload: {
				id: randomID(),
				firstname: firstname,
				lastname: lastname,
				email: email
			}
		});

		dispatch(reset("add-user"));
	};
}
