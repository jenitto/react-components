import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, minRows = 2, maxRows = 1000000000, disabled, message }) => {

	const [value, setValue] = useState('');
	const [rows, setRows] = useState(minRows);
	const textarea = useRef();


	const handleChange = (event) => {
		const textareaLineHeight = 24;
		const padding = 26 * 2;

		const previousRows = event.target.rows;
		event.target.rows = minRows; // reset number of rows in textarea

		// floor best performance => ~~()
		const currentRows = ~~((event.target.scrollHeight - padding) / textareaLineHeight);
		if (currentRows === previousRows) {
			event.target.rows = currentRows;
		}
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
		setValue(event.target.value);
		setRows(currentRows < maxRows ? currentRows : maxRows);
	}

	maxRows = maxRows < minRows ? minRows : maxRows;

	return (
		<div className={`sftk-textarea ${disabled ? 'sftk-textarea--disabled' : ''}`}>
			<textarea
				ref={textarea}
				required
				className={`sftk-textarea__textarea sftk-textarea__textarea--${message?.type}`}
				rows={rows}
				value={value}
				disabled={disabled}
				onChange={(e) => handleChange(e)} />
			<div className="sftk-textarea__icons-container">
				<span className={`sftk-textarea__badge sftk-textarea__badge--${message?.type}`}></span>
			</div>
			<div className="sftk-textarea__label">{label}</div>
			<span className={`sftk-textarea__hint sftk-textarea__hint--${message?.type}`}>{message?.label}</span>
		</div>
	);
}

TextArea.propTypes = {
	label: PropTypes.string.isRequired,
	minRows: PropTypes.number,
	maxRows: PropTypes.number,
	disabled: PropTypes.bool,
	message: PropTypes.shape({
		type: PropTypes.oneOf(['error', 'success', 'info']),
		label: PropTypes.string,
	})
};

export default TextArea;