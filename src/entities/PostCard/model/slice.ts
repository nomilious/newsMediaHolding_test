import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Post, PostsState } from "./interface";
import { getPosts, POST_LIMIT } from "./service";

const initialState: PostsState = {
    items: [],
    skip: 0,
    hasMore: true,
    loading: false,
    error: null,
};

export const postSlice: Slice<PostsState> = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.items.push(...action.payload);
                state.skip += POST_LIMIT;
                state.hasMore = action.payload.length === POST_LIMIT;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            }),
});

export default postSlice.reducer;
