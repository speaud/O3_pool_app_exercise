import {
  FSA_META_REQUEST,
  FSA_META_RECEIVE
} from '../constants/index.js';

//const initialState = {
//  players: [
//    0: {
//      name: "name0",
//      games: {
//        total: 3,
//        wins: 0
//      }
//    },
//    1: {
//      name: "name1",
//      games: {
//        total: 3,
//        wins: 1
//      }
//    },
//    2: {
//      name: "name2",
//      games: {
//        total: 3,
//        wins: 2
//      }
//    }
//  ]
//}


const initialState = {
  players: ['player0', 'player1', 'player2']
}


const League = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default League;