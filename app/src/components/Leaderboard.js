import React from 'react'
import PropTypes from 'prop-types'

const Leaderboard = ({players}) => (
  <div>
    <ul>
      {players.map((player, i) =>
        <li key={i}>
          <p><small>player {i}</small></p>
        </li>
      )}
    </ul>
  </div>
)

//Results.propTypes = {
//  players: PropTypes.array.isRequired
//}

export default Leaderboard