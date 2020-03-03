import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ form, onSelectionChange }) => {

	const handleRadioChange = (changeEvent) => {
		onSelectionChange(changeEvent.target.value);
	};

	const isSelected = option => {
		return option.value === form.selectedOption
	};
	const renderRadioButton = option => {
		return (
			<label
				key={option.value}
				className={`sftk-radio ${isSelected(option) ? 'sftk-radio--checked' : ''} ${option.disabled ? 'disabled' : ''}`}>
				<input
					className="sftk-radio__input"
					type="radio"
					name={form.name}
					value={option.value}
					disabled={option.disabled}
					checked={isSelected(option)}
					aria-checked={isSelected(option)}
					onChange={handleRadioChange}
				/>
				<div className="sftk-radio__button-container">
					<div className="sftk-radio__button">
						<div className="sftk-radio__button-icon" />
					</div>
				</div>

				<span className="sftk-radio__label">{option.label}</span>
			</label >
		);
	}

	return (
		<Fragment>
			{form.options.map((item) => renderRadioButton(item))}
		</Fragment>
	);
}

RadioGroup.propTypes = {
	form: PropTypes.shape({
		name: PropTypes.string.isRequired,
		selectedOption: PropTypes.string.isRequired,
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