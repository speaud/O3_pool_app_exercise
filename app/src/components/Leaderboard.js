import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const Leaderboard = ({players}) => (
  <div>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Win Pct.</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, i) =>
          <tr key={i}>
            <td>{i}</td>
            <td>{player.name}</td>
            <td>{Math.round(player.games.won / player.games.total * 100)}%</td>
          </tr>
        )}    
      </tbody>
    </Table>
  </div>
)

//Results.propTypes = {
//  players: PropTypes.array.isRequired
//}

export default Leaderboard