import {logIn, signUp} from '../api/index.js';

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await logIn(formData);

    dispatch({ type: "AUTH", data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await signUp(formData);
    dispatch({ type: "AUTH", data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};