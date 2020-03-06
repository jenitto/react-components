
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ARROW_KEY_UP = 'ArrowUp';
const ARROW_KEY_DOWN = 'ArrowDown';
const ESCAPE_KEY = 'Escape';
const ENTER_KEY = 'Enter';

const Select = ({ name, placeholder, multiple, disabled, selectedOptions, options, message, onSelectionChange }) => {

	const node = useRef();
	const [opened, setOpened] = useState(false);

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			return;
		}
		handleOpenSelect(false);
	};

	useEffect(() => {
		if (opened) {
			handleFocus(0);
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	const handleKeyDownSelect = (e) => {
		if (e.key === ENTER_KEY) {
			handleOpenSelect(!opened);
		} else if (e.key === ESCAPE_KEY) {
			handleOpenSelect(false);
		}
	}

	const handleKeyDownOption = (e, option, index) => {
		if (e.key === ENTER_KEY) {
			handleSelectChanges(option);
			e.stopPropagation();
		} else if (e.key === ARROW_KEY_UP) {
			e.preventDefault();
			e.stopPropagation();
			handleFocus(index - 1);
		} else if (e.key === ARROW_KEY_DOWN) {
			e.preventDefault();
			e.stopPropagation();
			handleFocus(index + 1);
		} else if (e.key === ESCAPE_KEY) {
			handleOpenSelect(false);
		}
	}

	const handleOpenSelect = (open) => {
		if (disabled) {
			return;
		}
		setOpened(open);
	}

	const handleFocus = index => {
		const length = Object.keys(focusableElements).length;
		if (index >= length) {
			index = 0;
		} else if (index < 0) {
			index = length - 1;
		}
		focusableElements[`item-${index}`].focus();
	}

	const handleSelectChanges = (selectedOption) => {
		if (disabled || selectedOption.disabled) {
			return;
		}

		let newSelectedOptions;

		if (!multiple) {
			newSelectedOptions = [selectedOption];
			handleOpenSelect(false);
		} else {
			newSelectedOptions = [...selectedOptions];
			if (newSelectedOptions.find((item) => item.value === selectedOption.value)) { // unadd
				newSelectedOptions = [...newSelectedOptions.filter((item) => selectedOption.value !== item.value)];
			} else { // add
				newSelectedOptions.push(selectedOption);
			}
		}
		onSelectionChange([...newSelectedOptions]);
	}

	const parseSelectedValues = () => selectedOptions.map((a) => a.label).join(', ');

	const isSelected = (option) => selectedOptions.find((item) => item.value === option.value);

	const focusableElements = [];
	disabled = disabled || !options.length;

	return (
		<div
			ref={node}
			className={`sftk-select ${opened ? 'opened' : 'closed'} ${disabled ? 'disabled' : ''}`}>
			<div
				className={`sftk-select__selected sftk-select__selected--${message?.type} ${disabled ? 'disabled' : ''}`}
				tabIndex={`${disabled ? -1 : 0}`}
				onKeyDown={handleKeyDownSelect}
				onClick={() => handleOpenSelect(!opened)}
			>
				<div className="sftk-select__title-container">
					<div className="sftk-select__name">{name}</div>
					<div className="sftk-select__placeholder">{selectedOptions?.length ? parseSelectedValues() : placeholder}</div>
				</div>
				<div className="sftk-select__select-icons-container">
					<span className={`sftk-select__badge sftk-select__badge--${message?.type}`}></span>
					<svg className="sftk-select__select-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="6" width="16" height="20">
							<path d="M15.2 6.3999V22.4499L9.775 17.0249L8.625 18.1749L15.425 24.9749L16 25.5249L16.575 24.9749L23.375 18.1749L22.225 17.0249L16.8 22.4499V6.3999H15.2Z" fill="#858585" />
						</mask>
						<g mask="url(#mask0)">
							<path d="M4 4H28V28H4V4Z" fill="#FCDD82" />
						</g>
					</svg>
				</div>
			</div>
			{
				opened
					? <div className="sftk-select__select">
						<div
							className="sftk-select__focus-trap"
							tabIndex="0"
							onFocus={() => handleFocus(0)} />
						{options.map((item, index) => (
							<div
								key={item.value}
								ref={x => focusableElements[`item-${index}`] = x}
								className={`sftk-select__option ${item.disabled ? 'disabled' : ''} ${isSelected(item) ? 'selected' : ''}`}
								disabled={item.disabled}
								tabIndex={item.disabled ? -1 : 0}
								onClick={() => handleSelectChanges(item)}
								onKeyDown={(e) => handleKeyDownOption(e, item, index)}>
								<span className="sftk-select__option-label">{item.label}</span>
								{isSelected(item) ? (
									<svg className="sftk-select__option-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="8" width="22" height="17">
											<path d="M25.8254 8.2251L12.0004 22.0501L6.17539 16.2251L5.02539 17.3751L11.4254 23.7751L12.0004 24.3251L12.5754 23.7751L26.9754 9.3751L25.8254 8.2251Z" fill="#858585" />
										</mask>
										<g mask="url(#mask2)">
											<path d="M4 4H28V28H4V4Z" fill="#FDEBB3" />
										</g>
									</svg>
								) : null}
							</div>
						))}
						<div
							className="sftk-select__focus-trap"
							tabIndex="0"
							onFocus={() => handleFocus(Object.keys(focusableElements).length - 1)} />
					</div>
					: null
			}
			<div className={`sftk-select__hint sftk-select__hint--${message?.type}`}>{message?.label}</div>
		</div >
	);
}

Select.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	selectedOptions: PropTypes.array,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			disabled: PropTypes.bool,
		})
	).isRequired,
	message: PropTypes.shape({
		type: PropTypes.oneOf(['error', 'success', 'info']),
		label: PropTypes.string,
	}),
	onSelectionChange: PropTypes.func.isRequired,
};

export default Select;