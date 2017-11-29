export const IS_PRODUCTION = (process.env.NODE_ENV == 'production') ? true : false;

// Define Flux Standard Action constants - https://github.com/acdlite/flux-standard-action
export const FSA_META_REQUEST = {
	fetching: true,
	fetched: false
};

export const FSA_META_RECEIVE = {
	fetching: false,
	fetched: true	
};

// Define action type constants
export const REQUEST_GAMEPLAY_ACTIVE_STATUS = 'REQUEST_GAMEPLAY_ACTIVE_STATUS'
export const RECEIVE_GAMEPLAY_ACTIVE_STATUS = 'RECEIVE_GAMEPLAY_ACTIVE_STATUS'

export const REQUEST_GAMEPLAY_OPPONENT = 'REQUEST_GAMEPLAY_OPPONENT'
export const RECEIVE_GAMEPLAY_OPPONENT = 'RECEIVE_GAMEPLAY_OPPONENT'

export const REQUEST_PLAYER_SETUP = 'REQUEST_PLAYER_SETUP'
export const RECEIVE_PLAYER_SETUP = 'RECEIVE_PLAYER_SETUP'

export const REQUEST_LEADERBOARD_UPDATE = 'REQUEST_LEADERBOARD_UPDATE'
export const RECEIVE_LEADERBOARD_UPDATE = 'RECEIVE_LEADERBOARD_UPDATE'