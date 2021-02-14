import { combineReducers } from '@reduxjs/toolkit'
import taskModules from './modules/taskModules'
const rootReducer = combineReducers({
  tasks: taskModules.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
