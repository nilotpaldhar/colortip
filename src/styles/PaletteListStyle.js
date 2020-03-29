import sizes from './sizes';

export default {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},

	container: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		[sizes.down('lg')]: {
			width: '80%'
		},
		[sizes.down('xs')]: {
			width: '75%'
		}
	},

	nav: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: 'white',

		'& a': {
			color: '#fff'
		}
	},

	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '1rem'
		}
	}
};
