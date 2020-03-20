import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
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

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1500);
		});
	}

	render() {
		const {
			background,
			name,
			moreUrl,
			showingFullPalette,
			classes
		} = this.props;
		const { copied } = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className={classes.ColorBox}>
					<div
						style={{ background }}
						className={`${classes.copyOverlay} ${copied &&
							classes.showOverlay}`}
					></div>
					<div
						className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}
					>
						<h1>Copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link to={moreUrl} onClick={e => e.stopPropagation()}>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
