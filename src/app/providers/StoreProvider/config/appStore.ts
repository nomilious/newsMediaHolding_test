import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { postSlice } from "entities/PostCard";


// Combine all slices into one root reducer.
const rootReducer = combineSlices(
    postSlice,
);
export function makeStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
    });
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
