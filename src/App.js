import React, { Component } from 'react';
import Pallette from './Pallette';
import seedColors from './seedColors';

class App extends Component {
	render() {
		return (
			<div>
				<Pallette {...seedColors[6]} />
			</div>
		);
	}
}

export default App;
