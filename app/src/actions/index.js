import { uniqBy } from 'lodash'

import {
    REQUEST_PLAYER_SETUP,
    RECEIVE_PLAYER_SETUP,
    REQUEST_GAME_NEW,
    RECEIVE_GAME_NEW,
    RECEIVE_GAME_PLAYER,


    REQUEST_GAMEPLAY_RESET,
    RECEIVE_GAMEPLAY_RESET,



    REQUEST_GAMEPLAY_ACTIVE_STATUS,
    RECEIVE_GAMEPLAY_ACTIVE_STATUS,

    REQUEST_GAMEPLAY_OPPONENT,
    RECEIVE_GAMEPLAY_OPPONENT    
} from '../constants'

// Used to generate unique id for new players
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

        console.log(uniqBy([...opponents, ...players], 'id'))    
    }










    // Start game play - Gameplay.active && Gameplay.opponents = []
    // Clear opponents - Gameplay.active && Gameplay.opponents = []
    // End game play - !Gameplay.active && Gameplay.opponents = []
    dispatch({
        type: REQUEST_GAMEPLAY_ACTIVE_STATUS
    });

    dispatch({
        type: RECEIVE_GAMEPLAY_ACTIVE_STATUS,
        payload: {
            active: bool,
            opponents: (typeof boolOrObj === 'boolean') ? boolOrObj : true
        }
    });

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

}






//export const recieveQueryResults = (json) => dispatch => {
//    dispatch({
//        type: RECEIVE_QUERY_RESULTS,
//        payload: json.data.children.map(child => child.data)
//    });
//};