import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "app/api/api.interceptor";
import { RootState } from "app/providers/StoreProvider";
import { Post } from "./interface";

export const POST_LIMIT = 10;

export const getPosts = createAsyncThunk<
    Post[],
    void,
    { state: RootState }
>('post/fetch', async (_, { getState, rejectWithValue }) => {
    const { skip } = getState().posts;
    try {
        const res = await instance.get<{ posts: Post[] }>('posts', {
            params: { limit: POST_LIMIT, skip },
        });
        return res.data.posts;
    } catch (e: any) {
        return rejectWithValue(e.message);
    }
});
