import { configureStore } from '@reduxjs/toolkit'
import musicEventReducer from './musicEvent'

export const store = configureStore({
  reducer: {
    music: musicEventReducer
  },
})