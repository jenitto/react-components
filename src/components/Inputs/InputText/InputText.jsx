import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputText = ({ label, disabled, message }) => {

	const [value, setValue] = useState('');

	return (
		<div className={`sftk-input-text ${disabled ? 'sftk-input-text--disabled' : ''}`}>
			<input className={`sftk-input-text__input sftk-input-text__input--${message?.type}`}
				type="text"
				required
				value={value}
				disabled={disabled}
				onChange={(e) => setValue(e.target.value)}>
			</input>
			<div className="sftk-input-text__icons-container">
				<span className={`sftk-input-text__badge sftk-input-text__badge--${message?.type}`}></span>
			</div>
			<label className="sftk-input-text__label">{label}</label>
			<span className={`sftk-input-text__hint sftk-input-text__hint--${message?.type}`}>{message?.label}</span>
		</div>
	);
}

InputText.propTypes = {
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	message: PropTypes.shape({
		type: PropTypes.oneOf(['error', 'success', 'info']),
		label: PropTypes.string,
	})
};

export default InputText;