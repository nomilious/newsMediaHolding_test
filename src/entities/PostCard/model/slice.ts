import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { getPosts } from "entities/PostCard/model/service";
import { Post, PostsState } from "./interface";

const LIMIT = 10;


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
                state.skip += LIMIT;
                state.hasMore = action.payload.length === LIMIT;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            }),
});

export default postSlice.reducer;
