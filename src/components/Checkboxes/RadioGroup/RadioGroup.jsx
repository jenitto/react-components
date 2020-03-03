import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio/Radio';

const RadioGroup = ({ form, onSelectionChange }) => {

	const isSelected = option => {
		return option.value === form.selectedOption
	};

	return (
		<Fragment>
			{
				form.options.map((item) => (
					<Radio
						name={form.name}
						value={item.value}
						label={item.label}
						selected={isSelected(item)}
						disabled={item.disabled || form.disabled}
						onSelectionChange={onSelectionChange}></Radio>
				))
			}
		</Fragment>
	);
}

RadioGroup.propTypes = {
	form: PropTypes.shape({
		name: PropTypes.string.isRequired,
		selectedOption: PropTypes.string.isRequired,
		disabled: PropTypes.bool,
		options: PropTypes.arrayOf(
			PropTypes.shape({
				value: PropTypes.string.isRequired,
				label: PropTypes.string.isRequired,
				disabled: PropTypes.bool,
			})
		),
	}).isRequired,
	onSelectionChange: PropTypes.func.isRequired,
};

export default RadioGroup;