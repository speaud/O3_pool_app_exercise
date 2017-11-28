import React from 'react'
import PropTypes from 'prop-types'
import { Table, ButtonToolbar, Button } from 'react-bootstrap'

const Leaderboard = ({players, selecting, select, noselect}) => (
  <div>
    <p>Leaderboard{selecting ? "yes" : "no"} -- {noselect ? "yes" : "no"}</p>
    <Table responsive striped bordered condensed hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Win Pct.</th>
          {selecting &&
            <th></th>
          }
        </tr>
      </thead>
      <tbody>
        {players.map((player, i) =>
          <tr key={i}>
            {/* new players shouldn't be ranked, since they haven't played yet */}
            <td>{ player.games.total > 0 ? i + 1 : '-' }</td>
            <td>{ player.name }</td>
            <td>
              {/* ...and new players shouldn't have a winning percentage */}
              { player.games.total > 0 ? Math.round(player.games.won / player.games.total * 100) + '%' : 'n/a (New Player)' }
            </td>
            {selecting &&
              <td>
                  {noselect ? (
                    <Button
                      bsSize="xsmall"
                      bsStyle="success"
                      disabled
                    >
                      Select Player
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
        {/* if adding new user,  */}
      </tbody>
    </Table>
  </div>
)

Leaderboard.propTypes = {
  players: PropTypes.array.isRequired
}

export default Leaderboard