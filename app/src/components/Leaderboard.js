import React from 'react'
import PropTypes from 'prop-types'
import { Table, ButtonToolbar, Button } from 'react-bootstrap'

const Leaderboard = ({players, selecting, select, selected, noselect}) => (
  <Table responsive striped bordered condensed hover>
    <thead>
      <tr>
        <th className="edge-tbl-col">Rank</th>
        <th>Name</th>
        <th>Win Pct.</th>
        {selecting &&
          <th className="edge-tbl-col"></th>
        }
      </tr>
    </thead>
    <tbody>

      {players.map((player, i) =>
        <tr key={i}>
          {/* new players shouldn't be ranked, since they haven't played yet */}
          <td className="edge-tbl-col">
            { player.games.total > 0 ? players[(i != 0) ? i-1 : i].games.won / players[(i != 0) ? i-1 : i].games.total == player.games.won / player.games.total && i != 0 ? "T" : i + 1 : '-' }
          </td>
          <td>{ player.name }</td>
          <td>
            {/* ...and new players shouldn't have a winning percentage */}
            { player.games.total > 0 ? Math.round(player.games.won / player.games.total * 100) + '%' : 'n/a (New Player)' }
          </td>

          {selecting &&
            <td className="edge-tbl-col">
              {/* if two players have been selected, the game is full or if a player has been selected, they can't be selected again */}
              {noselect || selected == player.id ? (
                <Button
                  bsSize="xsmall"
                  bsStyle="default"
                  disabled
                >
                  {!noselect && selected == player.id ? 'Player Selected' : 'Game Full'}
                </Button>                  
              ) : (
                <Button
                  bsSize="xsmall"
                  bsStyle="success"
                  value={JSON.stringify(player)}
                  onClick={select}
                >
                  Select Player
                </Button>
              )}
            </td>
          }

        </tr>
      )}
      
    </tbody>
  </Table>
)

Leaderboard.propTypes = {
  players: PropTypes.array.isRequired,    // League.players
  selecting: PropTypes.bool.isRequired,   // Gameplay.active
  select: PropTypes.func.isRequired,      // ...
  selected: PropTypes.string,             // Gameplay.opponents[0].id
  noselect: PropTypes.bool.isRequired     // Gameplay.opponents.length >= 2

}

export default Leaderboard