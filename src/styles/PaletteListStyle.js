import sizes from './sizes';
import background from './bg.svg';

export default {
	'@global': {
		'.fade-exit': {
			opacity: '1'
		},
		'.fade-exit-active': {
			opacity: '0',
			transition: 'opacity 300ms ease-out'
		}
	},
	root: {
		minHeight: '100vh',
		maxHeight: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#330055',
		backgroundImage: `url(${background})`,
		backgroundAttachment: 'fixed',
		backgroundSize: 'contain'
	},
	heading: {
		fontSize: '2rem',
		fontWeight: '700'
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

		'& a, button': {
			color: '#fff',
			textDecoration: 'none',
			fontSize: '1rem',
			transition: 'all .3s ease-in-out',
			'&:hover': {
				opacity: '0.9'
			}
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
