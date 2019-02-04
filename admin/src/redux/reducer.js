import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from "redux-form";
import authReducer from "../ducks/auth";
import usersReducer from "../ducks/users";
import history from "../history";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  router: connectRouter(history),
  form
});
