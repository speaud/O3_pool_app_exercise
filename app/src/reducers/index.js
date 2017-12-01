import { combineReducers } from 'redux'
import League from './League'
import Gameplay from './Gameplay'

const rootReducer = combineReducers({
  League,
  Gameplay
})

export default rootReducer