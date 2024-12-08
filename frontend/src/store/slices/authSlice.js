import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    name: null,
    id:null,
    email:null,
    role:null,
    phone:null,
  },
  reducers: {
    login: (state, action) => {
      const decodedJwt = jwt_decode(action.payload.accessToken);
      // console.log(decodedJwt); 
      state.isLoggedIn = true; 
      state.name = decodedJwt.name;
      state.id=decodedJwt._id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.email=decodedJwt.email;
      state.role=decodedJwt.role;
      state.phone=decodedJwt.phone;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.name = null;
      state.id=null;
      state.role=null;
      state.email=null;
      state.phone=null;
    },
    updateUserDetails: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.name = action.payload.name;
      state.id=action.payload.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.email=action.payload.email;
      state.role=action.payload.role;
      state.phone=action.payload.phone;
    }
  },
});


export const { login, logout , updateUserDetails} = authSlice.actions;
export const getUser = (state) => state.auth;
export default authSlice.reducer;

