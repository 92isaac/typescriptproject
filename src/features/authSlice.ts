import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface AuthState {
  name: string | null;
  token: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  image: string | null;
  phone: string | null;
  birthDate: string | null;
  address: string | null;
  city:string | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
  email: null,
  firstName: null,
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
        name: string;
        token: string;
        email: string;
        firstName: string;
        lastName: string;
        gender: string;
        image: string;
        phone: string;
  birthDate: string;
  address: string;
  city:string;
      }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          gender: action.payload.gender,
          image: action.payload.image,
          phone: action.payload.phone,
          birthDate: action.payload.birthDate,
          address: action.payload.address,
          city: action.payload.city,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.phone = action.payload.phone;
      state.birthDate = action.payload.birthDate;
      state.address = action.payload.address;
      state.city = action.payload.city;
    },
    logOut: (state) => {
      localStorage.clear();
      state.name = null;
      state.token = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.gender = null;
      state.image = null;
      state.phone = null;
      state.birthDate = null;
      state.address = null;
      state.city = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
