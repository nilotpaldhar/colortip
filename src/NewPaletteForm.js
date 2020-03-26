import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 400;

const styles = theme => ({
	root: {
		display: 'flex'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		alignItems: 'center'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth,
		height: 'calc(100vh - 64px)'
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	container: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttons: {
		width: '100%'
	},
	button: {
		width: '50%'
	}
});

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	};
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			colors: this.props.palettes[0].colors
		};
		this.addColor = this.addColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearPallete = this.clearPallete.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	addColor(newColor) {
		this.setState({
			colors: [...this.state.colors, newColor]
		});
	}

	handleSubmit(newPaletteName) {
		const newPalette = {
			paletteName: newPaletteName,
			id: newPaletteName.toLowerCase().replace(/ /g, '-'),
			colors: this.state.colors
		};
		this.props.savePalette(newPalette);
		// Rediract to home
		this.props.history.push('/');
	}

	removeColor(colorName) {
		this.setState({
			colors: this.state.colors.filter(color => color.name !== colorName)
		});
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}));
	};

	clearPallete() {
		this.setState({ colors: [] });
	}

	addRandomColor() {
		const allColors = this.props.palettes.map(palette => palette.colors).flat();
		let rand = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[rand];
		this.setState({ colors: [...this.state.colors, randomColor] });
	}

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const isPaletteFull = colors.length >= maxColors;

		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					handleSubmit={this.handleSubmit}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant='h4' gutterBottom>
							Design Your Palette
						</Typography>
						<div className={classes.buttons}>
							<Button
								className={classes.button}
								variant='contained'
								color='secondary'
								onClick={this.clearPallete}
							>
								Clear Palette
							</Button>
							<Button
								className={classes.button}
								variant='contained'
								color='primary'
								disabled={isPaletteFull}
								onClick={this.addRandomColor}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm
							isPaletteFull={isPaletteFull}
							addColor={this.addColor}
							colors={colors}
						/>
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={colors}
						removeColor={this.removeColor}
						axis='xy'
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
