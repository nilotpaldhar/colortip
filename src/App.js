import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import Pallette from './Pallette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
	constructor(props) {
		super(props);
		const savePalette = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes: savePalette || seedColors
		};
		this.findPalette = this.findPalette.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}
	findPalette(id) {
		return this.state.palettes.find(palette => palette.id === id);
	}

	savePalette(newPalette) {
		// Save new palette to the state
		this.setState(
			{ palettes: [...this.state.palettes, newPalette] },
			this.syncLocalStorage
		);
	}

	deletePalette(id) {
		this.setState(
			st => ({
				palettes: st.palettes.filter(palette => palette.id !== id)
			}),
			this.syncLocalStorage
		);
	}

	syncLocalStorage() {
		// Save palettes to loacl storage
		window.localStorage.setItem(
			'palettes',
			JSON.stringify(this.state.palettes)
		);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/palette/new'
					render={routeProps => (
						<NewPaletteForm
							savePalette={this.savePalette}
							palettes={this.state.palettes}
							{...routeProps}
						/>
					)}
				/>
				<Route
					exact
					path='/'
					render={routeProps => (
						<PaletteList
							palettes={this.state.palettes}
							deletePalette={this.deletePalette}
							{...routeProps}
						/>
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
							{...routeProps}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
