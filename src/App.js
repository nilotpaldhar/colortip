import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import Pallette from './Pallette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
	findPalette(id) {
		return seedColors.find(palette => palette.id === id);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={routeProps => (
						<PaletteList palettes={seedColors} {...routeProps} />
					)}
				/>
				<Route
					exact
					path='/palette/:id'
					render={routeProps => (
						<Pallette
							palette={generatePalette(
								this.findPalette(routeProps.match.params.id)
							)}
						/>
					)}
				/>
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={routeProps => (
						<SingleColorPalette
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
							colorId={routeProps.match.params.colorId}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
