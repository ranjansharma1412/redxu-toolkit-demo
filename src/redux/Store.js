import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'
import employee from './slices/employee'
import todo from './slices/todo'

export const store = configureStore({
  reducer: {
      auth:auth,
      employee:employee,
      todo:todo
  },
})