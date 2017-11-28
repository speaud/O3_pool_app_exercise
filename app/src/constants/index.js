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
