import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardCheckbox = ({ checked, disabled, setChecked }) => {

	const [focus, setFocus] = useState(false);

	const handleCheckboxChange = (e) => {
		if (disabled) {
			return;
		}
		setChecked(e.target.checked);
	};

	return (
		<label className={`sftk-card-checkbox ${checked ? 'sftk-card-checkbox--checked' : ''} ${disabled ? 'disabled' : ''} ${focus ? 'focused' : ''}`}>
			<div className="sftk-card-checkbox__button-container">
				<div className="sftk-card-checkbox__button">
					<div className="sftk-card-checkbox__button-icon" />
				</div>
			</div>
			<input
				className="sftk-card-checkbox__input"
				type="checkbox"
				disabled={disabled}
				checked={checked}
				aria-checked={checked}
				onChange={handleCheckboxChange}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)} />
		</label>
	);
}

CardCheckbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
	setChecked: PropTypes.func.isRequired,
};

export default CardCheckbox;