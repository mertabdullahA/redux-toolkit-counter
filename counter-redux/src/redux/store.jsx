import counterReducer from "../redux/counterSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
