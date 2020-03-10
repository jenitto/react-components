import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ className = '', label, color }) => (
	<div className={`sftk-chip ${className}`} style={{ color: color }}>
		<span className="sftk-chip__icon" style={{ backgroundColor: color }}></span>
		<span className="sftk-chip__label">{label}</span>
	</div>
);

Chip.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Chip;