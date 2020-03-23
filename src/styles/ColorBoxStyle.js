import chroma from 'chroma-js';
export default {
	ColorBox: {
		width: '20%',
		height: props => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		'&:hover button': {
			opacity: '1'
		}
	},
	copyText: {
		color: props =>
			chroma(props.background).luminance() >= 0.7
				? 'rgba(0, 0, 0, 0.7)'
				: '#fff'
	},
	colorName: {
		color: props =>
			chroma(props.background).luminance() <= 0.08
				? '#fff'
				: 'rgba(0, 0, 0, 0.7)'
	},
	seeMore: {
		color: props =>
			chroma(props.background).luminance() >= 0.7
				? 'rgba(0, 0, 0, 0.7)'
				: '#fff',
		position: 'absolute',
		right: '0',
		bottom: '0',
		border: 'none',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	},
	copyButton: {
		color: props =>
			chroma(props.background).luminance() >= 0.7
				? 'rgba(0, 0, 0, 0.7)'
				: '#fff',
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
		cursor: 'pointer',
		pointerEvents: 'none',
		opacity: '0',
		transition: 'all 0.5s ease'
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
		color: '#000'
	},
	copyOverlay: {
		position: 'absolute',
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transform: 'scale(0.01)',
		transition: 'transform 0.6s ease-in-out'
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '1'
	},
	copyMsg: {
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '4rem',
		transform: 'scale(0.01)',
		opacity: '0',
		color: '#fff'
	},
	showCopyMsg: {
		transform: 'scale(1)',
		opacity: '1',
		zIndex: '25',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s',

		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px #000',
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
			width: '100%',
			marginBottom: '0',
			textAlign: 'center',
			padding: '1rem',
			textTransform: 'uppercase'
		},

		'& p': {
			fontSize: '2rem',
			fontWeight: '100',
			letterSpacing: '5px'
		}
	}
};
