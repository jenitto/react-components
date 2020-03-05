import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../Buttons/ButtonIcon';

const TableFooter = ({ size, total, page }) => {
	return (
		<div className="sftk-table-footer">
			<div className="sftk-table-footer__container sftk-table-footer__container--left">
				<div className="sftk-table-footer__spacer">
					<span className="sftk-table-footer__text--hint">Elementos por página:&nbsp;</span>
					<span className="component">{size}</span>
				</div>
				<div className="sftk-table-footer__spacer">
					<span className="sftk-table-footer__text--hint">{page * size - size + 1}-{page * size}&nbsp;</span>
					de {total} elementos
				</div>
			</div>
			<div className="sftk-table-footer__container sftk-table-footer__container--right">
				<div className="sftk-table-footer__spacer">
					<span className="component">{page}&nbsp;</span>
					de {Math.ceil(total / page)} páginas
			</div>
				<div className="sftk-table-footer__spacer">
					<ButtonIcon icon={
						<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="8" width="20" height="16">
								<path d="M13.9867 8.625L7.18672 15.425L6.63672 16L7.18672 16.575L13.9867 23.375L15.1367 22.225L9.71172 16.8H25.7617V15.2H9.71172L15.1367 9.775L13.9867 8.625Z" fill="#858585" />
							</mask>
							<g mask="url(#mask3)">
								<path d="M4.16211 4H28.1621V28H4.16211V4Z" fill="#FCDD82" />
							</g>
						</svg>} />
				</div>
				<div className="sftk-table-footer__spacer">
					<ButtonIcon icon={
						<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="8" width="20" height="16">
								<path d="M18.3375 8.625L17.1875 9.775L22.6125 15.2H6.5625V16.8H22.6125L17.1875 22.225L18.3375 23.375L25.1375 16.575L25.6875 16L25.1375 15.425L18.3375 8.625Z" fill="#858585" />
							</mask>
							<g mask="url(#mask4)">
								<path d="M4.16211 4H28.1621V28H4.16211V4Z" fill="#FCDD82" />
							</g>
						</svg>
					} />
				</div>
			</div>
		</div>
	)
};

TableFooter.propTypes = {
	size: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
};

export default TableFooter;