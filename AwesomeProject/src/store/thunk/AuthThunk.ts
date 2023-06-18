import axios from 'axios';
import {AppDispatch, RootState} from '..';
import {
  User,
  setEmail,
  setLoading,
  setSecretInfo,
  setToken,
} from '../slices/AuthSlice';

export const Auth = (payload: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const authPost = await axios.post("http://localhost:8080/api/register", {
        email: payload,
      });
      dispatch(setEmail(authPost.data.email));
    } catch (error) {
      console.log('auth error', error);
    }
    dispatch(setLoading(false));
  };  
};

export const ConfirmUser = (payload: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const authPost = await axios.post("http://localhost:8080/api/confirm", {
        email: payload.email,
        code: payload.code,
      });
      dispatch(setToken(authPost.data.token));
      return authPost.data;
    } catch (error) {
      console.log('confirmerror', error);
    }
    dispatch(setLoading(false));
  };
};

export const Login = (payload: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const authPost = await axios.post("http://localhost:8080/api/login", {
        email: payload.email,
      });
      dispatch(setToken(authPost.data.token));
      return authPost.data;
    } catch (error) {
      console.log('login error', error);
    }
    dispatch(setLoading(false));
  };
}

export const getUsers = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const {token} = getState().authSlice;
      const response = await axios.get(`/api/user/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setSecretInfo(response.data.text));
    } catch (error) {
      console.log('error', error);
    }
  };
};
