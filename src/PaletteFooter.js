import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	PaletteFooter: {
		height: '8vh',
		backgroundColor: '#fff',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontWeight: '700'
	},

	emoji: {
		fontSize: '1.5rem',
		margin: '0 1rem'
	}
};

class PaletteFooter extends Component {
	render() {
		const { paletteName, emoji, classes } = this.props;
		return (
			<footer className={classes.PaletteFooter}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</footer>
		);
	}
}

export default withStyles(styles)(PaletteFooter);
