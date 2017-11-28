import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

  REQUEST_PLAYER_SETUP,
  RECEIVE_PLAYER_SETUP  
} from '../constants/index.js'

const initialState = {
  creating: false,
  players: [
    {
      id: 0,
      name: "player name0",
      games: {
        total: 8,
        won: 4
      }
    },
    {
      id: 1,
      name: "player name1",
      games: {
        total: 5,
        won: 2
      }
    },
    {
      id: 2,
      name: "player name2",
      games: {
        total: 3,
        won: 2
      }
    },
    {
      id: 3,
      name: "player name3",
      games: {
        total: 0,
        won: 0
      }
    }
  ]
}

const League = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_PLAYER_SETUP:
      return {
        ...state,
        creating: action.payload,
        meta: FSA_META_REQUEST
      }

    case RECEIVE_PLAYER_SETUP:
      return {
        ...state,
        creation: false,
        players: [...state.players, action.payload],
        meta: FSA_META_RECEIVE
      }

    default:
      return state
  }
}

export default League;