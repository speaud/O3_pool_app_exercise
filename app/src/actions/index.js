import { uniqBy } from 'lodash'

import {
  REQUEST_PLAYER_SETUP,
  RECEIVE_PLAYER_SETUP,

  REQUEST_LEADERBOARD_UPDATE,
  RECEIVE_LEADERBOARD_UPDATE,

  REQUEST_GAMEPLAY_ACTIVE_STATUS,
  RECEIVE_GAMEPLAY_ACTIVE_STATUS,

  REQUEST_GAMEPLAY_OPPONENT,
  RECEIVE_GAMEPLAY_OPPONENT
} from '../constants'

// Used to generate unique id value for new players
const uuidv1 = require('uuid/v1')

/*
  @param bool sets the state of the "new player" form, as in the 'League.creating' value
  @param arg  string, new player name to add to 'League.players'
*/
export const leagueAction = (bool, arg) => dispatch => {
  dispatch({
    type: REQUEST_PLAYER_SETUP,
    payload: bool
  });

  if (arg) {
    dispatch({
      type: RECEIVE_PLAYER_SETUP,
      payload: {
        id: uuidv1(),
        name: arg,
        games: {
          total: 0,
          won: 0
        }
      }
    });
  }    
}

/*
  @param bool         sets 'Gameplay.active' state
  @param boolOrObj    if argument is used as a initial value of a boolean object, this is then used to update the 'Gameplay.active' value
                      if argument is a instance of an object, this will be a "player object" which, in this case, will be added the the 'Gameplay.opponents' state or used to reset said state value
  @param id           id of a player, used to update 'League.games' state values of said player after a game
*/
export const gameplayAction = (bool, boolOrObj, id) => (dispatch, getState) => {
  dispatch({
    type: REQUEST_GAMEPLAY_ACTIVE_STATUS
  });

  if (id) {
    let
      players = getState().League.players,
      opponents = getState().Gameplay.opponents;

    opponents.forEach((opponent) => {
      opponent.games.total++

      if (opponent.id === id) {
        opponent.games.won++
      }
    });

    dispatch({
      type: REQUEST_LEADERBOARD_UPDATE
    });

    dispatch({
      type: RECEIVE_LEADERBOARD_UPDATE,
      payload: {
        players: uniqBy([...opponents, ...players], 'id'),
        history: {opponents: [opponents[0].id, opponents[1].id], winner: [id]}
      }
    });        
  }

  if (typeof boolOrObj === 'object') {
    dispatch({
      type: REQUEST_GAMEPLAY_OPPONENT
    });

    dispatch({
      type: RECEIVE_GAMEPLAY_OPPONENT,
      payload: boolOrObj
    });
  }

  dispatch({
    type: RECEIVE_GAMEPLAY_ACTIVE_STATUS,
    payload: {
      active: bool,
      opponents: (typeof boolOrObj === 'boolean') ? boolOrObj : true
    }
  });
}