import React from 'react'
import PropTypes from 'prop-types'
import { Table, ButtonToolbar, Button } from 'react-bootstrap'

const Leaderboard = ({players, selecting, select, selected, noselect}) => (
  <Table responsive striped bordered condensed hover>
    <thead>
      <tr>
        <th className="edge-tbl-col">Rank</th>
        <th>Name</th>
        <th>Games Won</th>
        {selecting &&
          <th className="edge-tbl-col"></th>
        }
      </tr>
    </thead>
    <tbody>

      {players.map((player, i) =>
        <tr key={i}>
          <td className="edge-tbl-col">


            {/* new players shouldn't be ranked, since they haven't played yet */}
            {player.games.total > 0 ? players[(i != 0) ? i-1 : i].games.won == player.games.won && i != 0 ? `T - ${i}` : i + 1 : '-'}


            {/* TODO:(BUG) the mutiple way tie, three or more players with the same amount of games won, issue. Displays 'T - i-1' instead of 'T - i-n' */}


          </td>
          <td>{player.name}</td>
          <td>
            {/* ...and new players shouldn't have a winning percentage */}
            {player.games.total > 0 ? player.games.won : 'n/a (New Player)'}
          </td>

          {selecting &&
            <td className="edge-tbl-col">
              {/* if two players have been selected, the game is full or if a player has been selected, they can't be selected again */}
              {noselect || selected === player.id ? (
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
  select: PropTypes.func.isRequired,      // Function to handle the creation of a new player in the league
  selected: PropTypes.string,             // Gameplay.opponents[0].id
  noselect: PropTypes.bool.isRequired     // Gameplay.opponents.length >= 2

}

export default Leaderboard