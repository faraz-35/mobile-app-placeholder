import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  loading?: boolean;
  error?: string;
  posts?: string[];
}

const initialState: CounterState = {
  value: 0,
};

const getPosts = createAsyncThunk<CounterState["posts"], number>(
  "posts/getPosts",
  async (number) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${number}`
    ).then((data) => data.json());
    return res;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reducer: counterReducer } = counterSlice;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export { getPosts };
export default counterSlice;
