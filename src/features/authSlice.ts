import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface AuthState {
  id: number | null;
  name: string | null;
  token: string | null;
  email: string | null;
  username: string | null;
  lastName: string | null;
  gender: string | null;
  image: string | null;
  phone: string | null;
  birthDate: string | null;
  address: string | null;
  city: string | null;
}

const initialState: AuthState = {
  id: null,
  name: null,
  token: null,
  email: null,
  username: null,
  lastName: null,
  gender: null,
  image: null,
  phone: null,
  birthDate: null,
  address: null,
  city: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        token: string;
        email: string;
        username: string;
        lastName: string;
        gender: string;
        image: string;
       
      }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: action.payload.id,
          name: action.payload.name,
          token: action.payload.token,
          email: action.payload.email,
          username: action.payload.username,
          lastName: action.payload.lastName,
          gender: action.payload.gender,
          image: action.payload.image,
        
        })
      );
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
     
    },
    logOut: (state) => {
      localStorage.clear();
      state.id = null;
      state.name = null;
      state.token = null;
      state.email = null;
      state.username = null;
      state.lastName = null;
      state.gender = null;
      state.image = null;
     
    
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
