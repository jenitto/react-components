import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, value, label, selected, disabled, onSelectionChange }) => {

	const handleRadioChange = (changeEvent) => {
		onSelectionChange(changeEvent.target.value);
	};

	return (
		<label
			key={value}
			className={`sftk-radio ${selected ? 'sftk-radio--checked' : ''} ${disabled ? 'disabled' : ''}`}>
			<input
				className="sftk-radio__input"
				type="radio"
				name={name}
				value={value}
				disabled={disabled}
				checked={selected}
				aria-checked={selected}
				onChange={handleRadioChange}
			/>
			<div className="sftk-radio__button-container">
				<div className="sftk-radio__button">
					<div className="sftk-radio__button-icon" />
				</div>
			</div>

			<span className="sftk-radio__label">{label}</span>
		</label >
	);
}

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	onSelectionChange: PropTypes.func.isRequired,
}

export default Radio;