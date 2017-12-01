import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col, PageHeader, ButtonToolbar, Button, Form, FormGroup, FormControl, HelpBlock, Panel } from 'react-bootstrap'

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

		this.onLeagueEvent = this.onLeagueEvent.bind(this);
		this.onGameplayEvent = this.onGameplayEvent.bind(this);

		this.findPlayer = this.findPlayer.bind(this);

		this.renderNewPlayer = this.renderNewPlayer.bind(this);
		this.renderGameplayHistory = this.renderGameplayHistory.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// Update local state with the history of games that have been played during the current "session" of gameplay
		this.setState({ history: [...nextProps.League.history] });
	}

	// See 'onLeagueEvent' action method for more information
	onLeagueEvent(e, bool) {
		// Open the form to create new player, Add new player to the league, Cancel player creation
		this.props.leagueAction(bool, e.target.value)

		// If the user cancels the player creation clear this.state don't rely on lifecycle hook to cls state
		if (!bool) {
			this.setState({ newPlayerName: '', validated: false });
		}
	}

	// See 'onGameplayEvent' action method for more information
	onGameplayEvent(e, bool, objOrBool, id) {
		// Setup new game, Select opponents, Cancel game, Play game, End game
		this.props.gameplayAction(bool, objOrBool, id)
	}

	/*
		@param	arr = array of player objects
		@param	id = id of player to-be found/returned
		@returns object
	*/
	findPlayer(arr, id) {
		return arr.find((player) => {
			return player.id === id
		});
	}			

	renderNewPlayer() {
	  const validateNewPlayerAddition = () => {
	    const length = this.state.newPlayerName.length;

    	// Basic, very basic, validation of user input...better than nothing...
	    if (length > 5 && length <= 10) {
	    	return 'success'
	    } else if (length != 0) {
	    	return 'warning'
	    }
	  }

	  // Update local state in relation to new player creation
	  const handleNewPlayerAdditionValue = (e) => {
	  	this.setState({
	  		newPlayerName: e.target.value,
	  		validated: (e.target.value.length > 5 && e.target.value.length <= 10) ? true : false
	  	});
	  }	  

		return (
			<div>
				{this.props.League.creating &&
		  		<Row className="show-grid">
						<Col md={12}>
							  <Form inline>
							    <FormGroup validationState={validateNewPlayerAddition()}>
							  		<FormControl
								    	type="text"
								    	value={this.state.newPlayerName}
								    	placeholder="Enter player name"
								    	onChange={handleNewPlayerAdditionValue}
								  	/>
						        <FormControl.Feedback />
							    </FormGroup>
									{' '}
									{this.state.validated &&
										<Button type="submit" bsStyle="primary" value={this.state.newPlayerName} onClick={(e) => this.onLeagueEvent(e, false)}>
											Add New Player
										</Button>
									}
									{' '}
									<Button bsStyle="warning" onClick={(e) => this.onLeagueEvent(e, false)}>
										Cancel
									</Button>    
						        <HelpBlock>Validation is based on string length (6 to 10).</HelpBlock>
								</Form>
						</Col>
					</Row>
				}
			</div>
		)		
	}

	// Keep track of gameplay history to-be displayed...
	renderGameplayHistory() {
		const { history } = this.state
		const { League } = this.props

		let winner = (history.length > 0) ? this.findPlayer(League.players, history[(history.length - 1)].winner[0]) : null;

		return (
			<div>
				{history.length > 0 &&
			    <Row className="show-grid">
						<Col md={12}>	
					    <Panel header="Gameplay Session History" bsStyle="info">
					      <p>Total games played - <b>{history.length}</b></p>
					      <p>
						      Last game details - 
						      {' '}
									<b>
										{winner.name}
							      {' '}
						      	def.
							      {' '}
							    	{/* NOTE: The conditional statement below isnt't the cleanest way to determine...but it'll suffice for this exercise... */}
							      {winner.id != this.findPlayer(League.players, history[(history.length - 1)].opponents[0]).id ? (
							      	<span>{this.findPlayer(League.players, history[(history.length - 1)].opponents[0]).name}</span>
						      	) : (
							      	<span>{this.findPlayer(League.players, history[(history.length - 1)].opponents[1]).name}</span>
						      	)}
									</b>
					      </p>
					    </Panel>
						</Col>
			    </Row>
				}
			</div>
		)
	}

  render(){
  	const
  		{ League, Gameplay } = this.props,
			{ history } = this.state;

		// Sort 'League.players' by most games they've won as stated in the specs for this exercise
		League.players.sort((a, b) => {
			return b.games.won - a.games.won
		});

    return (
			<Grid>
      	<PageHeader>O3 Pool App Exercise <small>Joshua Mummert</small></PageHeader>
		    <Row className="show-grid">
					<Col md={12}>
					<ButtonToolbar>
						<Button onClick={(e) => this.onLeagueEvent(e, true)}>Setup New Player</Button>
						{Gameplay.active ? (
				    	<Button disabled>Play New Game</Button>
						) : (
				    	<Button onClick={(e) => this.onGameplayEvent(e, true)}>Play New Game</Button>
						)}
					</ButtonToolbar>
					</Col>
		    </Row>
		    <Row className="show-grid">
					<Col md={12}>
						<Leaderboard
							players={League.players}
							opponents={Gameplay.opponents}
							findPlayer={this.findPlayer}
							selecting={Gameplay.active}
							renderNewPlayer={this.renderNewPlayer()}
							renderGameplayHistory={this.renderGameplayHistory()}
							onGameplayEvent={this.onGameplayEvent}
						/>
					</Col>
		    </Row>
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