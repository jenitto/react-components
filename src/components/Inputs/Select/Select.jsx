
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ARROW_KEY_UP = 'ArrowUp';
const ARROW_KEY_DOWN = 'ArrowDown';
const ESCAPE_KEY = 'Escape';
const ENTER_KEY = 'Enter';

const Select = ({ name, placeholder, multiple, disabled, selectedOptions, options, onSelectionChange }) => {

	const [opened, setOpened] = useState(false);

	const _handleKeyDownSelect = (e) => {
		switch (e.key) {
			case ENTER_KEY:
				_handleOpenSelect(true);
				return;
			case ESCAPE_KEY:
				_handleOpenSelect(false);
				return;
			default:
				return;
		}
	}

	const _handleKeyDownOption = (e, option) => {
		switch (e.key) {
			case ENTER_KEY:
				onSelectionChange(option);
				return;
			case ARROW_KEY_UP:
				console.log('up, previous focus');
				return;
			case ARROW_KEY_DOWN:
				console.log('down, next focus');
				return;
			case ESCAPE_KEY:
				_handleOpenSelect(false);
				return;
			default:
				return;
		}
	}

	const _handleOpenSelect = (open) => {
		if (disabled) {
			return;
		}
		setOpened(open);
	}

	const parseSelectedValues = () => selectedOptions.map((a) => a.label).join(', ');

	const isEnabled = (option) => selectedOptions.find((item) => item.value === option.value);

	disabled = disabled || !options.length;

	return (
		<div className={`sftk-select ${opened ? 'opened' : 'closed'} ${disabled ? 'disabled' : ''}`}>


			<select
				multiple={multiple}
				disabled={disabled}>
				{
					options.map((item) => (
						<option key={item.value} value={item.value}>{item.label}</option>
					))
				}
			</select>


			<div
				className='sftk-select__selected'
				onClick={() => _handleOpenSelect(!opened)}
				tabIndex='0'
				onKeyPress={_handleKeyDownSelect}>
				<div className="sftk-select__title-container">
					<div className="sftk-select__name">{name}</div>
					<div className="sftk-select__placeholder">{selectedOptions?.length ? parseSelectedValues() : placeholder}</div>
				</div>
				<div className="sftk-select__select-icon">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
						{
							options.map((item) => (
								<div
									key={item.value}
									className="sftk-select__option"
									disabled={item.disabled}
									tabIndex={item.disabled ? -1 : 0}
									onClick={() => onSelectionChange(item)}
									onKeyDown={(e) => _handleKeyDownOption(e, item)}>
									<span className="sftk-select__option-label">{item.label}</span>
									{isEnabled(item)
										? (<svg className="sftk-select__option-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 448.8 448.8">
											<g id="check">
												<polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55" fill="#FDEBB3" />
											</g>
										</svg>)
										: null}
								</div>
							))
						}
					</div>
					: null
			}
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
	onSelectionChange: PropTypes.func.isRequired,
};

export default Select;