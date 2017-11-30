import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col, PageHeader, ButtonToolbar, Button, Form, FormGroup, FormControl } from 'react-bootstrap'

import Leaderboard from '../components/Leaderboard'
import GameTable from '../components/GameTable'

import { leagueAction, gameplayAction } from '../actions/'

class App extends Component {
	constructor(props){
	super(props);

		const {dispatch} = props;

		this.state = {
			newPlayerName: '',
			validated: false,
			history: this.props.League.history
		}

		this.validateNewPlayerAddition = this.validateNewPlayerAddition.bind(this);
		this.handleNewPlayerAdditionValue = this.handleNewPlayerAdditionValue.bind(this);
		
		this.selectPlayer = this.selectPlayer.bind(this);
		this.findPlayer = this.findPlayer.bind(this);

		this.onLeagueEvent = this.onLeagueEvent.bind(this);
		this.onGameplayEvent = this.onGameplayEvent.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// TODO: comment...
		this.setState({ history: [...nextProps.League.history] });
	}

	onLeagueEvent(e, bool) {
		// Open the form to create new player
		// Add new player to the league
		// Cancel player creation
		this.props.leagueAction(bool, e.target.value)

		// If the user cancels the player creation clear the this.state
		// If the user created a new player this.state will be set to the value defined in the constructor, result of lifecycle hook
		if (!bool) {
			this.setState({ newPlayerName: '', validated: false });
		}
	}

	onGameplayEvent(e, bool, objOrBool, id) {
		// Setup new game
		// Select opponents
		// Cancel game
		// Play game, or rematch
		// End game
		this.props.gameplayAction(bool, objOrBool, id)
	}

	selectPlayer(e) {
		this.props.gameplayAction(true, JSON.parse(e.target.value))
	}

	findPlayer(id) {
		const { League } = this.props

		let foundPlayer = League.players.find((player) => {
			if (player.id === id) {
				return player
			}
		});

		return (
			<p>Last game winner - {foundPlayer.name}</p>
		)
	}

  validateNewPlayerAddition() {
    const length = this.state.newPlayerName.length;

    if (length > 5) {
    	return 'success'
    } else if (length > 5) {
    	return 'warning'
    } else if (length > 0) {
    	return 'error'
    } else {
    	return null;
    }
  }

  handleNewPlayerAdditionValue(e) {
  	this.setState({
  		newPlayerName: e.target.value,
  		validated: (e.target.value.length > 5) ? true : false
  	});
  }

  render(){
  	const { League, Gameplay } = this.props

  	const { history } = this.state

		League.players.sort((a, b) => {
			return b.games.won - a.games.won
		});

    return (
			<Grid>
      	<PageHeader>O3 Pool App Exercise <small>Joshua Mummert</small></PageHeader>

				{League.creating || Gameplay.active ? (
			    <Row className="show-grid">
						<Col md={12}>
							<ButtonToolbar>
								<Button disabled>Setup New Player</Button>
					    	<Button disabled>Play New Game</Button>
							</ButtonToolbar>
						</Col>
			    </Row>
				) : (
			    <Row className="show-grid">
						<Col md={12}>
						<ButtonToolbar>
							<Button onClick={(e) => this.onLeagueEvent(e, true)}>Setup New Player</Button>
				    	<Button onClick={(e) => this.onGameplayEvent(e, true)}>Play New Game</Button>
						</ButtonToolbar>
						</Col>
			    </Row>
				)}

		    <Row className="show-grid">
					<Col md={12}>
							<Leaderboard
								players={League.players}
								selecting={Gameplay.active}
								select={this.selectPlayer}
								noselect={(Gameplay.opponents.length >= 2) ? true : false}
								selected={(Gameplay.opponents.length > 0) ? Gameplay.opponents[0].id : null}
							/>
					</Col>
		    </Row>

				{League.creating &&
			    <Row className="show-grid">
						<Col md={12}>	
						  <Form inline>
						    <FormGroup validationState={this.validateNewPlayerAddition()}>
						  		<FormControl
							    	type="text"
							    	value={this.state.newPlayerName}
							    	placeholder="Enter player name"
							    	onChange={this.handleNewPlayerAdditionValue}
							  	/>
					        <FormControl.Feedback />
						    </FormGroup>

								{this.state.validated &&
									<Button type="submit" bsStyle="primary" value={this.state.newPlayerName} onClick={(e) => this.onLeagueEvent(e, false)}>
										Add New Player
									</Button>
								}

								<Button bsStyle="warning" onClick={(e) => this.onLeagueEvent(e, false)}>
									Cancel
								</Button>    
							</Form>
						</Col>
			    </Row>
				}		    

				{history.length > 0 &&
			    <Row className="show-grid">
						<Col md={12}>	
							<p>Games played this session - {history.length}</p>
							<p>Last game played - {history[(history.length - 1)].opponents[0]} vs. {history[(history.length - 1)].opponents[1]}</p>

							{this.findPlayer(history[(history.length - 1)].winner[0])}

{/*
	<p>Last game winner - {this.findPlayer(history[(history.length - 1)].winner[0])}</p>
	function to return JSX
*/}

						</Col>
			    </Row>
				}

				{Gameplay.active &&
					<GameTable
						opponents={Gameplay.opponents}
						onGameplayEvent={this.onGameplayEvent}
					/>
				}
		  </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    League: state.League,
    Gameplay: state.Gameplay
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
		leagueAction,
		gameplayAction
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);