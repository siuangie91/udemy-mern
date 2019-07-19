import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // default state to `null` to signal that by default we don't know if logged in or not
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if not logged in, payload is ""
    default:
      return state;
  }
}
