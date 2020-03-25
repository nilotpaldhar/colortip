import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.5)'
		}
	},
	boxContent: {
		position: 'absolute',
		padding: '10px',
		width: '100%',
		left: '0',
		bottom: '0',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		color: 'rgba(0, 0, 0, 0.5)',
		display: 'flex',
		justifyContent: 'space-between'
	},
	deleteIcon: {
		transition: 'all 0.3s ease-in-out'
	}
};

class DraggableColorBox extends Component {
	render() {
		const { color, name, classes } = this.props;
		return (
			<div className={classes.root} style={{ backgroundColor: color }}>
				<div className={classes.boxContent}>
					<span>{name}</span>
					<DeleteIcon className={classes.deleteIcon} />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(DraggableColorBox);
