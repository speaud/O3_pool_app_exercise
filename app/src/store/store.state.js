export const loadState = () => {
	try {
		const serializedStateObj = JSON.parse(localStorage.getItem('o3_pool_app_exercise'));
		
		// If the user has been inactive for more than 20 minutes, let the root redeucer set the state
		if (serializedStateObj.state === null || new Date().getTime() > serializedStateObj.expiration) {
			return undefined;
		}
		return serializedStateObj.state;
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		localStorage.setItem('o3_pool_app_exercise', JSON.stringify({
			"state": state,
			"expiration": new Date().getTime() + 20 * 60000 // 20 minutes
		}));
	} catch (err) {
		// Ignore
	}
};