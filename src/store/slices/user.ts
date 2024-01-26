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

const userLogin = createAsyncThunk<UserState["data"], UserAuth>(
  "user/userLogin",
  async (creds) => {
    const res = await axios.post(urls.userLoginUrl, creds);
    if (res.data.error) throw new Error(res.data.error);
    return res.data.data.Item;
  }
);

const userSignup = createAsyncThunk<UserState["data"], UserAuth>(
  "user/userSignup",
  async (creds) => {
    const res = await axios.post(urls.userSignupUrl, creds);
    if (res.data.error) throw new Error(res.data.error);
    return res.data.data;
  }
);

const handleAsyncActions = (
  builder: ActionReducerMapBuilder<UserState>,
  asyncThunk: AsyncThunk<User | null, UserAuth, {}>
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncActions(builder, userLogin);
    handleAsyncActions(builder, userSignup);
  },
});

export const { reducer: userReducer } = userSlice;
export const {} = userSlice.actions;
export { userLogin, userSignup };
export default userSlice;
