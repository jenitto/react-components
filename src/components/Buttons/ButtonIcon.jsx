import React from 'react';
import PropTypes from 'prop-types';

const ButtonIcon = ({ icon, disabled, onClick }) => (
	<button
		className="sftk-button-icon"
		disabled={disabled}
		onClick={onClick}>
		<span className="sftk-button-icon__icon">
			{icon}
		</span>
	</button >
);

ButtonIcon.propTypes = {
	icon: PropTypes.object.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ButtonIcon;