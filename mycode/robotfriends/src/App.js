import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super();
		this.state = {
			// state is what changes in an app and what describes the app. Virtual DOM collects entire state.
			// react uses this state to render and pass them down as props to the component
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		// we alway use setState() to update state
		this.setState( {searchfield: event.target.value} );
	}


	render() {
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
			 	<CardList robots={filterRobots}/> 
			</div>
		)
	}
}

export default App;