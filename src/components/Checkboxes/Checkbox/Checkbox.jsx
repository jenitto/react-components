import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ children, value, checked, indeterminate, disabled, setChecked }) => {

	const [focus, setFocus] = useState(false);

	const handleCheckboxChange = (e) => {
		if (disabled) {
			return;
		}
		setChecked({ value: value, checked: e.target.checked });
	};

	return (
		<label className={`sftk-checkbox ${checked ? 'sftk-checkbox--checked' : ''} ${indeterminate ? 'sftk-checkbox--indeterminate' : ''} ${disabled ? 'disabled' : ''} ${focus ? 'focused' : ''}`}>
			<div className="sftk-checkbox__button-container">
				<div className="sftk-checkbox__button">
					<div className="sftk-checkbox__button-icon" />
				</div>
			</div>
			<input
				className="sftk-checkbox__input"
				type="checkbox"
				disabled={disabled}
				checked={checked}
				aria-checked={indeterminate ? 'mixed' : checked}
				value={value}
				onChange={handleCheckboxChange}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)} />
			<span className="sftk-checkbox__label">{children}</span>
		</label>
	);
}

Checkbox.propTypes = {
	children: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	checked: PropTypes.bool.isRequired,
	indeterminate: PropTypes.bool,
	disabled: PropTypes.bool,
	setChecked: PropTypes.func.isRequired,
};

export default Checkbox;