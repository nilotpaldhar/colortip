import React, { Component } from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

class DraggableColorList extends Component {
	render() {
		const { colors, removeColor } = this.props;
		return (
			<div style={{ height: '100%' }}>
				{colors.map((color, i) => (
					<DraggableColorBox
						index={i}
						key={color.name}
						color={color.color}
						name={color.name}
						handleClick={() => removeColor(color.name)}
					/>
				))}
			</div>
		);
	}
}

export default SortableContainer(DraggableColorList);
