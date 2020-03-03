import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Switch = ({ children, checked, disabled, setChecked }) => {

	const [focus, setFocus] = useState(false);

	const handleSwitchChange = (e) => {
		if (disabled) {
			return;
		}
		setChecked(e.target.checked);
	};
	return (
		<label className={`sftk-switch ${checked ? 'sftk-switch--checked' : 'sftk-switch--unchecked'} ${disabled ? 'disabled' : ''} ${focus ? 'focused' : ''}`}>
			<span className="sftk-switch__button">
				<span className="sftk-switch__button-inside">
					<input
						className="sftk-switch__input"
						type="checkbox"
						disabled={disabled}
						checked={checked}
						aria-checked={checked}
						onChange={handleSwitchChange}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)} />
					<span className="sftk-switch__button-icon" />
				</span>
			</span>
			<span className="sftk-switch__label">{children}</span>
		</label>
	);
}

Switch.propTypes = {
	children: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
	setChecked: PropTypes.func,
};

export default Switch;