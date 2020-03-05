import React, { Fragment } from 'react';
import CheckboxContainer from './pages/CheckboxContainer';
import ButtonsContainer from './pages/ButtonsContainer';
import SwitchsContainer from './pages/SwitchsContainer';
import InputsContainer from './pages/InputsContainer';
import RadiosContainer from './pages/RadiosContainer';
import SelectsContainer from './pages/SelectsContainer';
import TableContainer from './pages/TableContainer';
import ButtonIcon from './components/Buttons/ButtonIcon';

function App() {
	return (
		<Fragment>
			<ButtonIcon icon={
				<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="8" width="20" height="16">
						<path d="M13.9867 8.625L7.18672 15.425L6.63672 16L7.18672 16.575L13.9867 23.375L15.1367 22.225L9.71172 16.8H25.7617V15.2H9.71172L15.1367 9.775L13.9867 8.625Z" fill="#858585" />
					</mask>
					<g mask="url(#mask3)">
						<path d="M4.16211 4H28.1621V28H4.16211V4Z" fill="#FCDD82" />
					</g>
				</svg>} />
			<TableContainer></TableContainer>
			<InputsContainer></InputsContainer>
			<SelectsContainer></SelectsContainer>
			<RadiosContainer></RadiosContainer>
			<CheckboxContainer></CheckboxContainer>
			<SwitchsContainer></SwitchsContainer>
			<ButtonsContainer></ButtonsContainer>
		</Fragment >
	);
}

export default App;
