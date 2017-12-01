import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar, Button, Grid, Row, Col, Well } from 'react-bootstrap'

const GameTable = ({opponents, onGameplayEvent}) => (
  <Well>
    <Row className="show-grid">
      <Col md={12}> 
          <div id="poolTableHeader">
            {opponents.length == 2 ? 'Gamplay is set. Select the winner!' : 'Select two players from the leaderboard above to play'}
          </div>
      </Col>
    </Row>            
    <Row className="show-grid">
      <Col md={12}> 
          <div id="poolTable">
            <div className="pocket-container">
              <div className="pocket"></div>
              <div className="pocket"></div>
              <div className="pocket"></div>
            </div>
            <div className="player-wrapper">
              {opponents.map((opponent, i) =>
                <div key={i} className="player-container">
                  <div className={["player", "active-player"].join(' ')} onClick={(e) => onGameplayEvent(e, true, true, opponent.id)}>
                    {opponent.name}
                  </div> 
                </div>
              )}
            </div>
            <div className="pocket-container">
              <div className="pocket"></div>
              <div className="pocket"></div>
              <div className="pocket"></div>
            </div>  
          </div>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={4}>
        <ButtonToolbar>
          {opponents.length > 0 &&
            <Button bsStyle="warning" onClick={(e) => onGameplayEvent(e, true, false)}>Reset Gameplay</Button>
          }
          <Button bsStyle="danger" onClick={(e) => onGameplayEvent(e, false, false)}>Cancel Gameplay</Button>
        </ButtonToolbar>
      </Col>
    </Row>
  </Well>
)

GameTable.propTypes = {
  opponents: PropTypes.array.isRequired,			// Gameplay.opponents
  onGameplayEvent: PropTypes.func.isRequired	// See parent for more info
}

export default GameTable