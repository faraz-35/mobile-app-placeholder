import {
  createAsyncThunk,
  ActionReducerMapBuilder,
  AsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import { urls } from "@src/config/urls";

const addUserObject = createAsyncThunk<User["objects"], UserObject>(
  "user/addUserObject",
  async (data) => {
    const { id, ...rest } = data;
    const res = await axios.post(urls.addUserObjectUrl, rest, {
      params: { id },
    });
    if (res.data.error) throw new Error(res.data.error);
    return res.data.data;
  }
);

const removeUserObject = createAsyncThunk<User["objects"], UserObject>(
  "user/removeUserObject",
  async (data) => {
    const { id, ...rest } = data;
    const res = await axios.post(urls.removeUserObjectUrl, rest, {
      params: { id },
    });
    if (res.data.error) throw new Error(res.data.error);
    return res.data.data;
  }
);

const handleAsyncObjectActions = (
  builder: ActionReducerMapBuilder<UserState>,
  asyncThunk: AsyncThunk<User["objects"], UserObject, {}>
) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data!.objects = payload;
    })
    .addCase(asyncThunk.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "Unknown Error";
    });
};

export { addUserObject, removeUserObject, handleAsyncObjectActions };
