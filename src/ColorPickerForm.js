import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyle';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: 'teal',
			newColorName: ''
		};
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', value =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isColorUnique', value =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName
		};
		this.props.addColor(newColor);
		this.setState({ newColorName: '' });
	}

	render() {
		const { isPaletteFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;

		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm instantValidate={false} onSubmit={this.handleSubmit}>
					<TextValidator
						className={classes.colorNameInput}
						value={newColorName}
						name='newColorName'
						placeholder='Color Name'
						margin='normal'
						variant='filled'
						onChange={this.handleChange}
						validators={['required', 'isColorNameUnique', 'isColorUnique']}
						errorMessages={[
							'Enter a color name',
							'Color name must be unique',
							'Color already used'
						]}
					/>
					<Button
						className={classes.addColor}
						variant='contained'
						type='submit'
						color='primary'
						disabled={isPaletteFull}
						style={{ backgroundColor: isPaletteFull ? 'grey' : currentColor }}
					>
						{isPaletteFull ? 'Palette Full' : 'Add Colour'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
