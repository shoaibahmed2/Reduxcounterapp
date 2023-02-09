import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../store/sliceCounter"

export const store = configureStore({
  reducer: {
    counterSlice,

  },
})
