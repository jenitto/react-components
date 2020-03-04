import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputPassword = ({ label, disabled, message }) => {

	const [value, setValue] = useState('');
	const [showPassword, setShowPassowrd] = useState(false);

	return (
		<div className={`sftk-input-password ${disabled ? 'sftk-input-password--disabled' : ''}`}>
			<input className={`sftk-input-password__input sftk-input-password__input--${message?.type}`}
				type={!showPassword ? 'password' : 'text'}
				required
				value={value}
				disabled={disabled}
				onChange={(e) => setValue(e.target.value)}>
			</input>
			<div className="sftk-input-password__icons-container">
				<div className={`sftk-input-password__badge sftk-input-password__badge--${message?.type}`}></div>
				<svg className="sftk-input-password__icon"
					onClick={() => setShowPassowrd(!showPassword)}
					width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="9" width="26" height="14">
						<path d="M15.9996 9.6C9.33086 9.6 4.19961 15.475 4.19961 15.475L3.72461 16L4.19961 16.525C4.19961 16.525 8.87773 21.8594 15.0996 22.35C15.3965 22.3875 15.6934 22.4 15.9996 22.4C16.3059 22.4 16.6027 22.3875 16.8996 22.35C23.1215 21.8594 27.7996 16.525 27.7996 16.525L28.2746 16L27.7996 15.475C27.7996 15.475 22.6684 9.6 15.9996 9.6ZM15.9996 11.2C17.7621 11.2 19.3871 11.6812 20.7996 12.325C21.309 13.1687 21.5996 14.1406 21.5996 15.2C21.5996 18.0906 19.4309 20.4656 16.6246 20.775C16.609 20.7781 16.5902 20.7719 16.5746 20.775C16.384 20.7844 16.1934 20.8 15.9996 20.8C15.7871 20.8 15.5809 20.7875 15.3746 20.775C12.5684 20.4656 10.3996 18.0906 10.3996 15.2C10.3996 14.1562 10.6809 13.1844 11.1746 12.35H11.1496C12.5746 11.6937 14.2184 11.2 15.9996 11.2ZM15.9996 12.8C14.6746 12.8 13.5996 13.875 13.5996 15.2C13.5996 16.525 14.6746 17.6 15.9996 17.6C17.3246 17.6 18.3996 16.525 18.3996 15.2C18.3996 13.875 17.3246 12.8 15.9996 12.8ZM8.99961 13.55C8.87461 14.0875 8.79961 14.6281 8.79961 15.2C8.79961 16.6031 9.19961 17.9156 9.89961 19.025C7.88398 17.8594 6.48398 16.4687 6.02461 16C6.40898 15.6062 7.48086 14.5625 8.99961 13.55ZM22.9996 13.55C24.5184 14.5625 25.5902 15.6062 25.9746 16C25.5152 16.4687 24.1152 17.8594 22.0996 19.025C22.7996 17.9156 23.1996 16.6031 23.1996 15.2C23.1996 14.6281 23.1246 14.0812 22.9996 13.55Z" fill="#858585" />
					</mask>
					<g mask="url(#mask1)">
						<path d="M4 4H28V28H4V4Z" fill="#FCDD82" />
					</g>
				</svg>
			</div>
			<label className="sftk-input-password__label">{label}</label>
			<span className={`sftk-input-password__hint sftk-input-password__hint--${message?.type}`}>{message?.label}</span>
		</div >
	);
}

InputPassword.propTypes = {
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	message: PropTypes.shape({
		type: PropTypes.oneOf(['error', 'success', 'info']),
		label: PropTypes.string,
	})
};

export default InputPassword;