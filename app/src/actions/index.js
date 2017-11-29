import { uniqBy } from 'lodash'

import {
    REQUEST_PLAYER_SETUP,
    RECEIVE_PLAYER_SETUP,

    REQUEST_LEADERBOARD_UPDATE,
    RECEIVE_LEADERBOARD_UPDATE,

    REQUEST_GAMEPLAY_ACTIVE_STATUS,
    RECEIVE_GAMEPLAY_ACTIVE_STATUS,

    REQUEST_GAMEPLAY_OPPONENT,
    RECEIVE_GAMEPLAY_OPPONENT,
} from '../constants'

// Used to generate unique id value for new players
const uuidv1 = require('uuid/v1')

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

export const gameplayAction = (bool, boolOrObj, id) => (dispatch, getState) => {
    console.log("gameplayAction")
    // Start game play - Gameplay.active && Gameplay.opponents = []
    // Clear opponents - Gameplay.active && Gameplay.opponents = []
    // End game play - !Gameplay.active && Gameplay.opponents = []
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
                players: uniqBy([...opponents, ...players], 'id')
            }
        });        
    }

    // Select opponent - Gameplay.active && Gameplay.opponents = [...]
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