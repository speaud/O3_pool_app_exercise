import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar, Button, Grid, Row, Col, Well } from 'react-bootstrap'

const GameTable = ({opponents, onGameplayEvent}) =>
  <div>

    <Row className="show-grid">
      <Col md={4}>
        <div className="button-wrapper">
      <ButtonToolbar>
          {opponents.length > 0 &&
            <Button bsStyle="warning" onClick={(e) => onGameplayEvent(e, true, false)}>Reset</Button>
          }
          {opponents.length === 2 &&
            <Button bsStyle="primary" onClick={(e) => onGameplayEvent(e, true, true, opponents[Math.round(Math.random())].id)}>Play</Button>
          }
          <Button bsStyle="danger" onClick={(e) => onGameplayEvent(e, false, false)}>Cancel</Button>
        </ButtonToolbar>
        </div>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={12}> 
        <Well>
          <div id="poolTable">
            <div className="pocket-container">
              <div className="pocket"></div>
              <div className="pocket"></div>
              <div className="pocket"></div>
            </div>
            <div className="player-wrapper">
              {opponents.map((opponent, i) =>
                <div key={i} className="player-container">
                  <div className="player">
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
        </Well>
      </Col>
    </Row>

  </div>;

GameTable.propTypes = {
  opponents: PropTypes.array.isRequired,			// Gameplay.opponents
  onGameplayEvent: PropTypes.func.isRequired	// ...
}

export default GameTable