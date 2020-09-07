import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import MapArea from './components/MapArea';

class App extends Component {
	render() {
		return (
		  <div key="App">
			<Router>
			  <Switch>
				<Route path="/" exact component={MapArea} />
			  </Switch>
			</Router>
		  </div>
		);
	}
}

export default App;
