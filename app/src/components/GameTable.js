import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar, Button } from 'react-bootstrap'

const GameTable = ({opponents, onGameplayEvent}) => (
  <div>
    <p>GameTable</p>
	  <ButtonToolbar>
      {opponents.map((opponent, i) =>
			    <Button value={opponent}>{opponent.name}</Button>
      )}
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