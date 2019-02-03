import { Record, List } from "immutable";
import { appName } from "../config";
import uuid from "uuid/v4";

/**
 * Constants
 * */
export const moduleName = "participants";
const prefix = `${appName}/${moduleName}`;

export const ADD_PARTICIPANT_START = `${prefix}/ADD_PARTICIPANT_START`;
export const ADD_PARTICIPANT_SUCCESS = `${prefix}/ADD_PARTICIPANT_SUCCESS`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  list: List()
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PARTICIPANT_SUCCESS:
      return state.set("list", state.list.push(payload));
    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const getParticipantList = state => state.participants.list;

/**
 * Action Creators
 * */

export function addParticipant({ firstName, lastName, email }) {
  return dispatch => {
    dispatch({
        type: ADD_PARTICIPANT_START
    });

    // async in future with id from db
    var user = {
        id: uuid(),
        firstName,
        lastName,
        email
    };

    dispatch({
      type: ADD_PARTICIPANT_SUCCESS,
      payload: user
    });
  };
}
