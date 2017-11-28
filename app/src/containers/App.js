import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ButtonToolbar, Button } from 'react-bootstrap'
import Leaderboard from '../components/Leaderboard'

class App extends Component {
  constructor(props){
    super(props);

    const {dispatch} = props;

    this.createNewPlayer = this.createNewPlayer.bind(this);
  }

  createNewPlayer(e) {
  	console.log("createNewPlayer")
  }

  render(){
  	const { League } = this.props

	League.players.sort((a, b) => {
		return Math.round(b.games.won / b.games.total * 100) - Math.round(a.games.won / a.games.total * 100)
	});

    return (
      <div>


		  <ButtonToolbar>
		    <Button onClick={this.createNewPlayer}>Creat New Player</Button>
		  </ButtonToolbar>






		<Leaderboard players={League.players} />







      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    League: state.League
  };
}

export default connect(mapStateToProps)(App);