import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ label, color }) => (
	<div className="sftk-chip" style={{ color: color }}>
		<span className="sftk-chip__icon" style={{ backgroundColor: color }}></span>
		<span className="sftk-chip__label">{label}</span>
	</div>
);

Chip.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Chip;