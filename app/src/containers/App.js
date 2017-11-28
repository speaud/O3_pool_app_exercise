import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap'
import Leaderboard from '../components/Leaderboard'

class App extends Component {
  constructor(props){
    super(props);

    const {dispatch} = props;
  }

  render(){
  	const { League } = this.props

	League.players.sort((a, b) => {
		return Math.round(b.games.won / b.games.total * 100) - Math.round(a.games.won / a.games.total * 100)
	});


    return (
      <div>
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