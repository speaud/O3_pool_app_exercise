import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE
} from '../constants/index.js'

const initialState = {
  players: [
    {
      id: 0,
      name: "name0",
      games: {
        total: 3,
        won: 0
      }
    },
    {
      id: 1,
      name: "name1",
      games: {
        total: 3,
        won: 1
      }
    },
    {
      id: 2,
      name: "name2",
      games: {
        total: 3,
        won: 2
      }
    }
  ]
}


//const initialState = {
//  players: ['player0', 'player1', 'player2'],
//  playing: [],
//  meta: null
//}


const League = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default League;