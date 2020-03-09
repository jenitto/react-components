import React from 'react';
import PropTypes from 'prop-types';
import ButtonPrimary from '../../Buttons/Buttons-primary';

const TableHeader = ({ totalSelected }) => {

	return (
		<div className="sftk-table-header">
			<div className="sftk-table-header__container sftk-table-header__container--left">
				{totalSelected
					? <span className="sftk-table-header__chip">
						{totalSelected} elementos seleccionados
						</span>
					: null
				}
			</div>
			<div className="sftk-table-header__container sftk-table-header__container--right">
				<ButtonPrimary
					className="sftk-table-header__button-principal"
					label="Btn 1"
					hasRipple
					onClick={() => console.log('click')}></ButtonPrimary>
			</div>
		</div>
	)
};

TableHeader.propTypes = {
	totalSelected: PropTypes.number,
};

export default TableHeader;