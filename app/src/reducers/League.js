import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

  REQUEST_PLAYER_SETUP,
  RECEIVE_PLAYER_SETUP,

  REQUEST_LEADERBOARD_UPDATE,
  RECEIVE_LEADERBOARD_UPDATE  
} from '../constants/index.js'

const initialState = {
  creating: false,
  history: [],
  /*
    Again, within the specs for this exercise it clearly states you want a "Leaderboard of players with the most wins," so...
    this is the state structure I decided to go with to meet said spec

    players.games.total was added for new user logic --- see ../components/Leaderboard for more info
  */
  players: [
    {
      id: "0",
      name: "player name0",
      games: {
        total: 8,
        won: 4
      }
    },
    {
      id: "1",
      name: "player name1",
      games: {
        total: 5,
        won: 2
      }
    },
    {
      id: "2",
      name: "player name2",
      games: {
        total: 5,
        won: 2
      }
    },
    {
      id: "3",
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

    case REQUEST_LEADERBOARD_UPDATE:
      return {
        ...state,
        meta: FSA_META_REQUEST
      }

    case RECEIVE_LEADERBOARD_UPDATE:
      return {
        ...state,
        players: action.payload.players,
        history: [...state.history, action.payload.history],
        meta: FSA_META_RECEIVE        
      }      

    default:
      return state
  }
}

export default League;