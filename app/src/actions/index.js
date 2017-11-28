import {
    REQUEST_PLAYER_SETUP,
    RECEIVE_PLAYER_SETUP,
    REQUEST_GAME_NEW,
    RECEIVE_GAME_NEW,
    RECEIVE_GAME_PLAYER,


    REQUEST_GAMEPLAY_RESET,
    RECEIVE_GAMEPLAY_RESET    
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

export const gamePlayAction = (bool, arg) => dispatch => {
    console.log("gamePlayAction")
    console.log("bool = " + bool)

    if (bool == 'null') {
        dispatch({
            type: REQUEST_GAMEPLAY_RESET
        });

        dispatch({
            type: RECEIVE_GAMEPLAY_RESET
        });
    } else {
        dispatch({
            type: REQUEST_GAME_NEW,
            payload: bool
        });
    }


    if (arg) {
        dispatch({
            type: RECEIVE_GAME_PLAYER,
            payload: arg
        });
    }
}





// 










//export const recieveQueryResults = (json) => dispatch => {
//    dispatch({
//        type: RECEIVE_QUERY_RESULTS,
//        payload: json.data.children.map(child => child.data)
//    });
//};