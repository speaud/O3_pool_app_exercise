import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ButtonToolbar, Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

import Leaderboard from '../components/Leaderboard'
import GameTable from '../components/GameTable'

import { leagueAction, gamePlayAction } from '../actions/'

class App extends Component {
	constructor(props){
	super(props);

	const {dispatch} = props;

	this.state = {
		value: ''
	}

	this.getValidationState = this.getValidationState.bind(this);
	this.handleChange = this.handleChange.bind(this);

	
	this.selectPlayer = this.selectPlayer.bind(this);





		this.onLeagueEvent = this.onLeagueEvent.bind(this);
		this.onGamePlayEvent = this.onGamePlayEvent.bind(this);
	}



	onLeagueEvent(e, bool){
		// Open the form to create new player
		// Add new player to the league
		// Cancel player creation
		this.props.leagueAction(bool, e.target.value)
		// TODO: validate new player name

		// If the user cancels the player creation clear the this.state
		// The user created a new player this.state will be set to the value defined in the constructor, ...lifecycle hook
		if (!bool) {
			this.setState({ value: ''});
		}
	}

	onGamePlayEvent(e, bool, objOrBool){
		// Setup new game
		// Select opponents
		// Cancel game
		// Play game, or rematch
		// End game
		this.props.gamePlayAction(bool, objOrBool)
	}


	selectPlayer(e){
		console.dir(JSON.parse(e.target.value))

		this.props.gamePlayAction(null, JSON.parse(e.target.value))
		//console.dir(e.t)
		//this.props.createNewGameAction(true, e.target.value)
	}

	











  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render(){
  	const { League, GamePlay } = this.props

		League.players.sort((a, b) => {
			return Math.round(b.games.won / b.games.total * 100) - Math.round(a.games.won / a.games.total * 100)
		});

    return (
      <div>
				<Leaderboard
					players={League.players}
					selecting={GamePlay.active}
					select={this.selectPlayer}
					noselect={(GamePlay.opponents.length >= 2) ? true : false}
				/>

				{League.creating || GamePlay.active ? (
					<div>
						<ButtonToolbar>
							<Button disabled>Setup New Player</Button>
				    	<Button disabled>Play New Game</Button>
						</ButtonToolbar>
						{League.creating &&
							<Form inline>
								<FormGroup
							  		controlId="formBasicText"
							  		validationState={this.getValidationState()}
								>
						  		<FormControl
							    	type="text"
							    	value={this.state.value}
							    	placeholder="Enter text"
							    	onChange={this.handleChange}
							  	/>
							  	<FormControl.Feedback />
								</FormGroup>
								<Button type="submit" bsStyle="primary" value={this.state.value} onClick={(e) => this.onLeagueEvent(e, false)}>
									Add New Player
								</Button>
								<Button bsStyle="warning" onClick={(e) => this.onLeagueEvent(e, false)}>
									Cancel
								</Button>
							</Form>
						}
					</div>
				) : (
					<ButtonToolbar>
						<Button onClick={(e) => this.onLeagueEvent(e, true)}>Setup New Player</Button>
			    	<Button onClick={(e) => this.onGamePlayEvent(e, true)}>Play New Game</Button>
					</ButtonToolbar>
				)}

				{GamePlay.active &&
					<GameTable
						opponents={GamePlay.opponents}
						cancel={this.onGamePlayEvent}
					/>
				}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    League: state.League,
    GamePlay: state.GamePlay
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
		leagueAction,
		gamePlayAction
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);