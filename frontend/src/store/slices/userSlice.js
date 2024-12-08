import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiClient } from "../../utils/ApiClient";
import jwtDecode from "jwt-decode";
const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const decodedJwt = jwtDecode(token);
      const response = await ApiClient(`/user/getUser/${decodedJwt._id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getUser = (state) => state.user.user;
export const getStatus = (state) => state.user.status;
export const getError = (state) => state.user.error;
export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
