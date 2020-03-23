export default {
	Navbar: {
		height: '8vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flexStart'
	},

	logo: {
		marginRight: '15px',
		padding: '0 20px',
		fontSize: '20px',
		backgroundColor: '#eceff1',
		height: '100%',
		display: 'flex',
		alignItems: 'center',

		'& a': {
			color: '#212121',
			textDecoration: 'none'
		}
	},

	sliderContainer: {
		display: 'flex',
		alignItems: 'center'
	},

	slider: {
		width: '340px',
		marginLeft: '15px',

		'& .rc-slider-rail': {
			height: '8px'
		},
		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},
		'& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
			backgroundColor: '#45ce30',
			outline: 'none',
			boxShadow: 'none',
			border: '2px solid #45ce30',
			width: '13px',
			height: '13px',
			marginTop: '-3px'
		}
	},

	selectContainer: {
		marginLeft: 'auto',
		marginRight: '20px'
	}
};
