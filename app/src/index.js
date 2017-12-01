import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import storeConfig from './store/store.config.js'
import scss from './styles/index.scss'

import App from './containers/App'
import DevTools from './containers/DevTools'

import { IS_PRODUCTION } from './constants'

const store = storeConfig()

// Define the render method in a function expression so it can be used by Webpack HMR
const renderApp = Component => {
  render(
    <AppContainer>
    	<Provider store={store}>
    		<div>
	      		<Component />
            {/*!IS_PRODUCTION &&
              <DevTools />
            */}
      		</div>
  		</Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(App)

// Enable Webpack HMR, for development only
if (!IS_PRODUCTION && module.hot) {
  module.hot.accept('./containers/App', () => { renderApp(App) })
}