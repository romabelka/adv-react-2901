import { Record } from "immutable";
import { appName } from "../config";
import fakeUsers from "../fixtures/users";
import fakeId from "../utils/fakeId";

/**
 * Constants
 * */
export const moduleName = "users";
const prefix = `${appName}/${moduleName}`;

export const LOAD_USERS = `${prefix}/LOAD_USERS`;
export const CREATE_USER = `${prefix}/CREATE_USER`;
//export const READ_USER = `${prefix}/CREATE_USER`
export const UPDATE_USER = `${prefix}/UPDATE_USER`;
export const DELETE_USER = `${prefix}/DELETE_USER`;

export const ReducerRecord = Record({
  users: null
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return state.set("users", payload.users);
    case CREATE_USER:
      let expendedUsers = state.get("users");
      expendedUsers.push(payload.user);
      return state.set("users", expendedUsers);
    case DELETE_USER:
      let filteredUsers = state.get("users").filter(_ => _.id !== payload.id);
      return state.set("users", filteredUsers);
    default:
      return state;
  }
}

export function loadUsers() {
  return dispatch => {
    dispatch({
      type: LOAD_USERS,
      payload: { users: fakeUsers }
    });
  };
}

export function createUser(user) {
  return dispatch => {
    dispatch({
      type: CREATE_USER,
      payload: { user: Object.assign({}, user, { id: fakeId() }) }
    });
  };
}

export function deleteUser(id) {
  return dispatch => {
    dispatch({
      type: DELETE_USER,
      payload: { id }
    });
  };
}
