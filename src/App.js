import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import Pallette from './Pallette';
import SingleColorPalette from './SingleColorPalette';
import Page from './Page';
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
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames='page' timeout={300}>
							<Switch location={location}>
								<Route
									exact
									path='/palette/new'
									render={routeProps => (
										<Page>
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={this.state.palettes}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/'
									render={routeProps => (
										<Page>
											<PaletteList
												palettes={this.state.palettes}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:id'
									render={routeProps => (
										<Page>
											<Pallette
												palette={generatePalette(
													this.findPalette(routeProps.match.params.id)
												)}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:paletteId/:colorId'
									render={routeProps => (
										<Page>
											<SingleColorPalette
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
												colorId={routeProps.match.params.colorId}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									render={routeProps => (
										<Page>
											<PaletteList
												palettes={this.state.palettes}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
