import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// state is what changes in an app and what describes the app. Virtual DOM collects entire state.
			// react uses this state to render and pass them down as props to the component
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		// we alway use setState() to update state
		this.setState( {searchfield: event.target.value} );
	}

	render() {
		const { robots, searchfield } = this.state;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f2'>Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
				 		<CardList robots={filterRobots}/> 
				 	</Scroll>
				</div>
			)
		}	
	}
}

export default App;