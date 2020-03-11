import React from 'react';
import PropTypes from 'prop-types';

const LANG = 'es';

const Card4 = ({ className = '', timeBefore, timeAfter, disabled, setChecked }) => {
	const iconCross = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask7" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="6" width="11" height="12">
				<path d="M7.71875 6.99976L7 7.71851L11.3906 12.1091L7 16.4998L7.71875 17.2185L12.1094 12.8279L16.5 17.2185L17.2188 16.4998L12.8281 12.1091L17.2188 7.71851L16.5 6.99976L12.1094 11.3904L7.71875 6.99976Z" fill="#858585" />
			</mask>
			<g mask="url(#mask7)">
				<path d="M4 4H20V20H4V4Z" fill="#E6E6E6" />
			</g>
		</svg>
	);

	const dateBefore = new Date(timeBefore);
	const dateAfter = new Date(timeAfter);
	const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	return (
		<div className={`sftk-card ${className} ${disabled ? 'disabled' : ''}`}>
			<div className="sftk-card__cover">
				<div className="sftk-card__cover-wrapper">
					<div className="sftk-card__cover-title">{dateAfter.getDate()}</div>
					<div className="sftk-card__cover-subtitle">{monthNames[dateAfter.getMonth()]}</div>
				</div>
			</div>
			<div className="sftk-card__body">
				<div className="sftk-card__body-wrapper">
					<div className="sftk-card__title">De: {dateBefore.toLocaleDateString(LANG)} a las {dateBefore.toLocaleTimeString('es')}</div>
					<div className="sftk-card__subtitle">A: {dateAfter.toLocaleDateString(LANG)} a las {dateAfter.toLocaleTimeString('es')}</div>
				</div>
				{!disabled ?
					<div
						className="sftk-card__button"
						onClick={setChecked}>
						{iconCross()}
					</div>
					: null}
			</div>
		</div>
	)
};

Card4.propTypes = {
	/**
	* Clases CSS adicionales para la card.
	*/
	className: PropTypes.string,
	/**
	* String de fecha de inicio
	*/
	timeBefore: PropTypes.string.isRequired,
	/**
	* String de fecha de fin
	*/
	timeAfter: PropTypes.string.isRequired,
	/**
	 * Estado disabled de la card
	 */
	disabled: PropTypes.bool,
	/**
	* Función que se lanza al cambiar el estado del checkbox
	*/
	setChecked: PropTypes.func,
};

export default Card4;