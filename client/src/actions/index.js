import axios from "axios";
import { FETCH_USERS } from "./types";

export const fetchUser = () => {
  // V1:

  //   return (dispatch) => {
  //     axios
  //       .get("/api/current_user")
  //       .then(res => dispatch({ type: FETCH_USERS, payload: res }));
  //   };

  //using redux-thunk, we can return a function instead of an action
  return async dispatch => {
    const res = await axios.get("/api/current_user");

    dispatch({ type: FETCH_USERS, payload: res.data });
  };

  //Usually what we do: return an action
  //const request = axios.get('/api/current_user');

  // return {
  //     type: FETCH_USERS,
  //     payload: request
  // };
};

export const handleToken = token => {
  return async dispatch => {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USERS, payload: res.data });
  };
};
