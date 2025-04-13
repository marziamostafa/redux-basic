import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI.JS";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

// create async Thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    //extraReducers: to handle asynchronous tasks; it's an function
    builder.addCase();
  },
});
export default postsSlice.reducer;
export const {} = postsSlice.actions;
