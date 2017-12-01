import React from 'react'
import PropTypes from 'prop-types'
import { Panel, Table, Button } from 'react-bootstrap'

const Leaderboard = ({players, opponents, findPlayer, selecting, renderNewPlayer, renderGameplayHistory, onGameplayEvent}) => (
  <Panel header="Leaderboard" bsStyle="primary">
    {renderNewPlayer}
    <Table responsive condensed hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Games Won</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, i) =>
          <tr
            key={i}
            onClick={
              (e) => {
                /* the user is selecting players for a game */
                selecting
                ?
                  /* ...and two opponents are not selected to play */
                  opponents.length < 2
                  ?
                    /* ...and this player has not already been selected */
                    !findPlayer(opponents, player.id)
                    ?
                      /* allow the user to select the player */
                      onGameplayEvent(e, true, player)
                    :
                    /* this player has already been selected to play */
                    alert("This player has already been selected to play. Select a different player.")
                  :
                  /* two players are already selected */
                  alert("Two players are selected.\nReset the gameplay to select new players.")
                :
                /* the user is not in gameplay selecting users */
                alert("Play a new game to select players.")
              }
            }
            className={(findPlayer(opponents, player.id) && 'selected-player')}
          >
            <td>
              {/* new players will not be ranked, since they haven't played yet */}
              {player.games.total > 0 ? players[(i != 0) ? i-1 : i].games.won == player.games.won && i != 0 ? 'T' : i + 1 : '-'}
            </td>
            <td>{player.name}</td>
            <td>
              {player.games.total > 0 ? player.games.won : 'n/a (New Player)'}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
    {renderGameplayHistory}
  </Panel>
)

Leaderboard.propTypes = {
  players: PropTypes.array.isRequired,                  // League.players
  opponents: PropTypes.array.isRequired,                // Gameplay.opponents
  findPlayer: PropTypes.func.isRequired,                // Helper method to find players
  selecting: PropTypes.bool.isRequired,                 // Gameplay.active
  renderNewPlayer : PropTypes.object.isRequired,        // Component
  renderGameplayHistory: PropTypes.object.isRequired,   // Component
  onGameplayEvent: PropTypes.func.isRequired            // See parent for more info
}

export default Leaderboard