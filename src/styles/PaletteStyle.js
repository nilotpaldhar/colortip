import sizes from './sizes';

export default {
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

		[sizes.down('lg')]: {
			width: '25%',
			height: '33.333%'
		},

		[sizes.down('md')]: {
			width: '50%',
			height: '20%'
		},

		[sizes.down('xs')]: {
			width: '100%',
			height: '10%'
		},

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
