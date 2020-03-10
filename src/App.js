import React, { Fragment } from 'react';
import CheckboxContainer from './pages/CheckboxContainer';
import ButtonsContainer from './pages/ButtonsContainer';
import SwitchsContainer from './pages/SwitchsContainer';
import InputsContainer from './pages/InputsContainer';
import RadiosContainer from './pages/RadiosContainer';
import SelectsContainer from './pages/SelectsContainer';
import TableContainer from './pages/TableContainer';
import CardsContainer from './pages/CardsContainer';

function App() {
	return (
		<Fragment>
			<CardsContainer />
			<TableContainer />
			<InputsContainer />
			<SelectsContainer />
			<RadiosContainer />
			<CheckboxContainer />
			<SwitchsContainer />
			<ButtonsContainer />
		</Fragment >
	);
}

export default App;
