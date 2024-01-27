import {
  createAsyncThunk,
  ActionReducerMapBuilder,
  AsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import { urls } from "@src/config/urls";

const userPasswordChange = createAsyncThunk<string, UserPasswordChange>(
  "user/userPasswordChange",
  async (creds) => {
    const res = await axios.post(urls.userPasswordChangeUrl, creds);
    if (res.data.error) throw new Error(res.data.error);
    return res.data.message;
  }
);

const userAccountDelete = createAsyncThunk<string, Id>(
  "user/userAccountDelete",
  async (creds) => {
    const res = await axios.post(urls.userAccountDelete, creds);
    if (res.data.error) throw new Error(res.data.error);
    return res.data.message;
  }
);

const handleAsyncProfileActions = (
  builder: ActionReducerMapBuilder<UserState>,
  asyncThunk: AsyncThunk<string, any, {}>
) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    })
    .addCase(asyncThunk.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "Unknown Error";
    });
};

export { userPasswordChange, userAccountDelete, handleAsyncProfileActions };
