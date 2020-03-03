import React, { Fragment, useState } from 'react';
import Select from '../components/Inputs/Select/Select';

const SelectsContainer = () => {

	const selectInitial = {
		name: 'País',
		placeholder: 'Selecciona un país',
		multiple: false,
		selectedOptions: [],
		disabled: false,
		options: [
			{ value: 'es', label: 'España' },
			{ value: 'fr', label: 'Francia' },
			{ value: 'pt', label: 'Portugal' },
			{ value: 'it', label: 'Italia', disabled: true },
			{ value: 'de', label: 'Alemania' },
			{ value: 'nd', label: 'Países muy bajos, tanto que corta el texto', disabled: true },
		]
	};

	const [select, setSelect] = useState(selectInitial);


	const handleSelectChanges = (selectedOption) => {
		let selectedOptions = [...select.selectedOptions];
		console.log(selectedOptions);
		if (selectedOptions.find((item) => item.value === selectedOption.value)) { // unadd
			selectedOptions = [...selectedOptions.filter((item) => selectedOption.value !== item.value)];
		} else { // add
			selectedOptions.push(selectedOption);
		}
		setSelect({ ...select, selectedOptions: selectedOptions });
	}

	return (
		<Fragment>
			<h1>Select</h1>
			<div className="container">
				<div className="title">Select 1</div>
				<Select
					name={select.name}
					placeholder={select.placeholder}
					multiple={select.multiple}
					disabled={select.disabled}
					selectedOptions={select.selectedOptions}
					options={select.options}
					onSelectionChange={handleSelectChanges}></Select>
			</div>
		</Fragment>
	);
}

export default SelectsContainer;