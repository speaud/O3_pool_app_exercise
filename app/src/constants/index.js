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
export const REQUEST_PLAYER_NEW = 'REQUEST_PLAYER_NEW'
export const RECEIVE_PLAYER_NEW = 'RECEIVE_PLAYER_NEW'

export const REQUEST_PLAYER_SETUP = 'REQUEST_PLAYER_SETUP'
export const RECEIVE_PLAYER_SETUP = 'RECEIVE_PLAYER_SETUP'

export const REQUEST_PLAYER_ADD = 'REQUEST_PLAYER_ADD'
export const RECEIVE_PLAYER_ADD = 'RECEIVE_PLAYER_ADD'

export const REQUEST_GAME_NEW = 'REQUEST_GAME_NEW'
export const RECEIVE_GAME_NEW = 'RECEIVE_GAME_NEW'

export const REQUEST_GAME_PLAYER = 'REQUEST_GAME_PLAYER'
export const RECEIVE_GAME_PLAYER = 'RECEIVE_GAME_PLAYER'

export const REQUEST_GAME_PLAY = 'REQUEST_GAME_PLAY'
export const RECEIVE_GAME_PLAY = 'RECEIVE_GAME_PLAY'

export const REQUEST_GAMEPLAY_RESET = 'REQUEST_GAMEPLAY_RESET'
export const RECEIVE_GAMEPLAY_RESET = 'RECEIVE_GAMEPLAY_RESET'

export const REQUEST_GAMEPLAY_CANCEL = 'REQUEST_GAMEPLAY_CANCEL'
export const RECEIVE_GAMEPLAY_CANCEL = 'RECEIVE_GAMEPLAY_CANCEL'