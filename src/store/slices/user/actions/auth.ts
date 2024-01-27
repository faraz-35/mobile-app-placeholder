import {
  createAsyncThunk,
  ActionReducerMapBuilder,
  AsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import { urls } from "@src/config/urls";

const userLogin = createAsyncThunk<User, UserAuth>(
  "user/userLogin",
  async (creds) => {
    const res = await axios.post(urls.userLoginUrl, creds);
    if (res.data.error) throw new Error(res.data.error);
    return res.data.data.Item;
  }
);

const userSignup = createAsyncThunk<User, UserAuth>(
  "user/userSignup",
  async (creds) => {
    const res = await axios.post(urls.userSignupUrl, creds);
    if (res.data.error) throw new Error(res.data.error);
    return res.data.data;
  }
);

const handleAsyncAuthActions = (
  builder: ActionReducerMapBuilder<UserState>,
  asyncThunk: AsyncThunk<User, UserAuth, {}>
) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(asyncThunk.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "Unknown Error";
    });
};

export { userLogin, userSignup, handleAsyncAuthActions };
