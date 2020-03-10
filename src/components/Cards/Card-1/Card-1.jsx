import React from 'react';
import PropTypes from 'prop-types';
import CardCheckbox from '../Card-Checkbox/Card-Checkbox';

const Card1 = ({ className = '', title, subtitle, abbr, selectable = true, checked, disabled, setChecked }) => {

	const handleSelected = () => {
		if (!disabled && selectable) {
			setChecked();
		}
	}

	const getAbbr = (str) => abbr || str.match(/\b(\w)/g).join('').slice(0, 2);

	return (
		<div
			className={`sftk-card ${className} ${checked ? 'checked' : ''} ${selectable ? 'selectable' : ''} ${disabled ? 'disabled' : ''}`}
			onClick={handleSelected}>
			<div className="sftk-card__cover">
				<div className="sftk-card__abbr">{getAbbr(title)}</div>
			</div>
			<div className="sftk-card__body">
				<div className="sftk-card__body-wrapper">
					<div className="sftk-card__title">{title}</div>
					<div className="sftk-card__subtitle">{subtitle}</div>
				</div>
				{selectable ?
					<div className="sftk-card__button">
						<CardCheckbox
							checked={checked}
							disabled={disabled}
							setChecked={handleSelected}></CardCheckbox>
					</div>
					: null}
			</div>
		</div>
	)
};

Card1.propTypes = {
	/**
	* Clases CSS adicionales para la card.
	*/
	className: PropTypes.string,
	/**
	* Titulo de la card
	*/
	title: PropTypes.string.isRequired,
	/**
	* Subtitulo de la card
	*/
	subtitle: PropTypes.string.isRequired,
	/**
	 * Abreviatura de la card
	 */
	abbr: PropTypes.string,
	/**
	 * True si la card es seleccionable
	 */
	selectable: PropTypes.bool,
	/**
	 * Estado disabled de la card
	 */
	disabled: PropTypes.bool,
	/**
	 * Estado de selección de la card
	 */
	checked: PropTypes.bool,
	/**
	* Función que se lanza al cambiar el estado del checkbox
	*/
	setChecked: PropTypes.func,
};

export default Card1;