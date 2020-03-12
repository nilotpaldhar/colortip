import React, { Component } from 'react';
import Pallette from './Pallette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
	render() {
		console.log(generatePalette(seedColors[4]));
		return (
			<div>
				<Pallette palette={generatePalette(seedColors[4])} />
			</div>
		);
	}
}

export default App;
