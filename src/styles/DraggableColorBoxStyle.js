const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'grabbing',
		marginBottom: '-7px',
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
		cursor: 'pointer',
		transition: 'all 0.3s ease-in-out'
	}
};

export default styles;
