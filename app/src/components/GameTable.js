import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar, Button } from 'react-bootstrap'

const GameTable = ({opponents, play, cancel}) => (
  <div>
    <p>GameTable</p>
    <p>Select Winner</p>
			  <ButtonToolbar>
	        {opponents.map((opponent, i) =>
					    <Button value={opponent} onClick={play}>{opponent.name}</Button>
	        )}
	        <Button bsStyle="warning" onClick={(e) => cancel(e, false)}>Cancel</Button>
			  </ButtonToolbar>
  </div>
)

//Leaderboard.propTypes = {
//  players: PropTypes.array.isRequired
//}

export default GameTable