import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

  REQUEST_GAMEPLAY_ACTIVE_STATUS,
  RECEIVE_GAMEPLAY_ACTIVE_STATUS,

  REQUEST_GAMEPLAY_OPPONENT,
  RECEIVE_GAMEPLAY_OPPONENT
} from '../constants/index.js'

const initialState = {
  opponents: [],
  active: false
}

const GamePlay = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_GAMEPLAY_ACTIVE_STATUS:
    case REQUEST_GAMEPLAY_OPPONENT:
      return {
        ...state,
        meta: FSA_META_REQUEST
      }

    case RECEIVE_GAMEPLAY_ACTIVE_STATUS:
      return {
        ...state,
        active: action.payload.active,
        opponents: (!action.payload.opponents) ? [] : [...state.opponents],
        meta: FSA_META_RECEIVE
      }

    case RECEIVE_GAMEPLAY_OPPONENT:
    	return {
        ...state,
        opponents: [...state.opponents, action.payload],
        meta: FSA_META_RECEIVE    		
    	}
      
    default:
      return state
  }
}

export default GamePlay;