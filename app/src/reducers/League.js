import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE
} from '../constants/index.js'

const initialState = {
  players: [
    {
      id: 0,
      name: "player name0",
      games: {
        total: 5,
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
    }
  ],
  playing: [],
  meta: null
}

const League = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default League;