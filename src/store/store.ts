import { combineReducers } from 'redux'
import userReducer from '@src/store/reducers/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const appReducer = combineReducers({
  user: userReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: appReducer,
  })
}

export type AppStateType = ReturnType<typeof appReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
