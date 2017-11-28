import { combineReducers } from 'redux'
import League from './League'
import GamePlay from './GamePlay'

const rootReducer = combineReducers({
  League,
  GamePlay
})

export default rootReducer
