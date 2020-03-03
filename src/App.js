import React, { Fragment } from 'react';
import CheckboxContainer from './pages/CheckboxContainer';
import ButtonsContainer from './pages/ButtonsContainer';
import SwitchsContainer from './pages/SwitchsContainer';
import InputsContainer from './pages/InputsContainer';
import RadiosContainer from './pages/RadiosContainer';
import SelectsContainer from './pages/SelectsContainer';

function App() {
	return (
		<Fragment>
			<SelectsContainer></SelectsContainer>
			<RadiosContainer></RadiosContainer>
			<CheckboxContainer></CheckboxContainer>
			<SwitchsContainer></SwitchsContainer>
			<InputsContainer></InputsContainer>
			<ButtonsContainer></ButtonsContainer>
		</Fragment >
	);
}

export default App;
