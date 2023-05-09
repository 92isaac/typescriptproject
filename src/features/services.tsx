import axios from 'axios';
import { Dispatch } from 'redux';
import { loginSuccess, logoutSuccess } from '../features/User';
import { Action } from '../features/User'

// https://dummyjson.com/auth/login
// https://dummyjson.com/auth/login

const API_URL = 'https://dummyjson.com/auth';

console.log(API_URL + '/login')


export const login = (username: string, password: string) => async (dispatch: Dispatch<Action>) => {
    console.log(username, password);
  try {
    const response = await axios.post(API_URL + '/login', {
        username,
      password,
    },
    {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    console.log(response)
    console.log(response.status)
    dispatch(loginSuccess(response.data.token));
    // if(response.status !== 200) return new Error
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

export const logout = () => async (dispatch: Dispatch<Action>) => {
  dispatch(logoutSuccess());
};
