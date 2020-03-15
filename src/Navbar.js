import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ format: e.target.value }, () =>
			this.props.handleChange(this.state.format)
		);
	}

	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<nav className='Navbar'>
				<div className='logo'>
					<a href='#'>ColorTip</a>
				</div>
				<div className='slider-container'>
					<small>Level: {level}</small>
					<div className='slider'>
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
				<div className='select-container'>
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(0, 0, 0)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(0, 0, 0, 1.0)</MenuItem>
					</Select>
				</div>
			</nav>
		);
	}
}

export default Navbar;
