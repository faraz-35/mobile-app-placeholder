import { createSlice } from "@reduxjs/toolkit";

import { handleAsyncAuthActions, userLogin, userSignup } from "./actions/auth";
import {
  handleAsyncObjectActions,
  addUserObject,
  removeUserObject,
} from "./actions/object";

const initialState: UserState = {
  loading: false,
  error: null,
  message: null,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    //auth
    handleAsyncAuthActions(builder, userLogin);
    handleAsyncAuthActions(builder, userSignup);
    //object
    handleAsyncObjectActions(builder, addUserObject);
    handleAsyncObjectActions(builder, removeUserObject);
  },
});

export const { reducer: userReducer } = userSlice;
export const { clearError, clearMessage } = userSlice.actions;
export default userSlice;
