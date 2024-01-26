import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import axios from "axios";

import { urls } from "@src/config/urls";

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
};

//Auth
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

//Object management
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncAuthActions(builder, userLogin);
    handleAsyncAuthActions(builder, userSignup);
    handleAsyncObjectActions(builder, addUserObject);
    handleAsyncObjectActions(builder, removeUserObject);
  },
});

export const { reducer: userReducer } = userSlice;
export const {} = userSlice.actions;
export { userLogin, userSignup, addUserObject, removeUserObject };
export default userSlice;
