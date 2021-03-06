export default {
	root: {
		backgroundColor: 'white',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',

		'&:hover svg': {
			opacity: '1'
		}
	},
	colors: {
		height: '150px',
		width: '100%',
		overflow: 'hidden'
	},
	miniColor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		marginBottom: '-6px'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: 'black',
		paddingTop: '0.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.5rem'
	},

	deleteIcon: {
		color: '#fff',
		backgroundColor: '#eb3d30',
		width: '20px',
		height: '20px',
		position: 'absolute',
		right: '0',
		top: '0',
		padding: '10px',
		zIndex: '10',
		opacity: '0',
		transition: 'all 0.3s ease-in-out'
	}
};
