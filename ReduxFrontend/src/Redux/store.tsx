import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer"

export const store = configureStore({
    reducer: {
        accountReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;