import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar, Button } from 'react-bootstrap'

const GameTable = ({opponents, onGameplayEvent}) => (
  <div>
    <div id="poolTable">
      <div className="pocket-container">
        {/* ... */}
      </div>





      <div className="player-container">
        {opponents.map((opponent, i) =>
          <div key={i} className="player">
            {opponent.name}
          </div>
        )}
      </div>





      <div className="pocket-container">
        {/* ... */}
      </div>  
    </div>
	  <ButtonToolbar>
      {opponents.length === 2 &&
      	<Button bsStyle="primary" onClick={(e) => onGameplayEvent(e, true, true, opponents[Math.round(Math.random())].id)}>Random Winner</Button>
      }
      {opponents.length > 0 &&
      	<Button bsStyle="warning" onClick={(e) => onGameplayEvent(e, true, false)}>Reset</Button>
      }
    	<Button bsStyle="danger" onClick={(e) => onGameplayEvent(e, false, false)}>Cancel</Button>
	  </ButtonToolbar>
  </div>
)

GameTable.propTypes = {
  opponents: PropTypes.array.isRequired,			// Gameplay.opponents
  onGameplayEvent: PropTypes.func.isRequired	// ...
}

export default GameTable