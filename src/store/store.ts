import { configureStore } from "@reduxjs/toolkit";
import sneakersSlice from "./slices/sneakersSlice";
import dataSlice from "./slices/dataSlice.ts";
import basketSlice from "./slices/basketSlice.ts";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    sneakers: sneakersSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
