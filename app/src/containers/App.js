import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Leaderboard from '../components/Leaderboard'

class App extends Component {
  constructor(props){
    super(props);

    const {dispatch} = props;
  }

  render(){
  	const { League } = this.props

  	//League.players


	//var new_array = arr.map(function callback(currentValue, index, array) {
	//    // Return element for new_array
	//}[, thisArg])  	

  	//const a = ['a', 'b', 'c']

  	// i = value, z = key || index
  	//a.map((i, z) => {
  	//	console.log(i + z)
  	//})

  	//const b = { b1: {b11: "b111"}, b2: {b22: "b222"} }

//  	for (const bn in b) {
//  		//console.log(bn)
//  		console.log(b[bn])
//  	}
//
//  	console.log(Object.entries(b)); // [ ['foo', 'bar'], ['baz', 42] ]


	//const mapp = new Map(Object.entries(b));
	//console.log(mapp);

	//for (const m in mapp) {
	//	console.log(m)
	//}

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