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
  data: {
    username: "asdf",
    email: "asdf",
    id: "asdf",
    objects: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
export const {} = userSlice.actions;
export default userSlice;
