import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: data });
};

export const handleToken = token => async dispatch => {
  const { data } = await axios.post('/api/stripe', token);
  // we are updating the user model since it contains the credit info
  // therefore we can dispatch the same FETCH_USER action
  dispatch({ type: FETCH_USER, payload: data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const { data } = await axios.post('/api/surveys', values);

  history.push('/surveys'); // redirect to /surveys
  dispatch({ type: FETCH_USER, payload: data });
};

export const fetchSurveys = () => async dispatch => {
  const { data } = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: data });
};
