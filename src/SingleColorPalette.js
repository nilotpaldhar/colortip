import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

const styles = {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden'
	},

	PaletteColors: {
		height: '84vh'
	},

	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		backgroundColor: '#000',
		'& span': {
			color: '#fff',
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			display: 'inline-block',
			width: '100px',
			height: '30px',
			textAlign: 'center',
			outline: 'none',
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
			fontSize: '1rem',
			lineHeight: '30px',
			textTransform: 'uppercase',
			textDecoration: 'none',
			border: 'none',
			cursor: 'pointer'
		}
	}
};

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format: 'hex'
		};
		this.changeFormat = this.changeFormat.bind(this);
	}

	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			);
		}

		// Return all shades of given color
		return shades.slice(1);
	}

	changeFormat(value) {
		this.setState({ format: value });
	}

	render() {
		const { format } = this.state;
		const { paletteName, emoji } = this.props.palette;
		const { history, classes } = this.props;
		const colorBoxes = this._shades.map(color => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[format]}
				showingFullPalette={false}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} showingAllColors={false} />
				<div className={classes.PaletteColors}>
					{colorBoxes}
					<div className={classes.goBack} onClick={history.goBack}>
						<span>Go Back</span>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
