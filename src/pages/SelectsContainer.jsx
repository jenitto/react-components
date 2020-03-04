import React, { Fragment, useState } from 'react';
import Select from '../components/Inputs/Select/Select';

const SelectsContainer = () => {

	const select1Initial = {
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

	const select2Initial = {
		name: 'Ingredientes',
		placeholder: 'Selecciona varios ingredientes',
		multiple: true,
		selectedOptions: [],
		disabled: false,
		options: [
			{ value: '1', label: 'Extra cheese' },
			{ value: '2', label: 'Mushroom' },
			{ value: '3', label: 'Pepperoni' },
			{ value: '4', label: 'Sausage' },
			{ value: '5', label: 'Tomato' },
			{ value: '6', label: 'Pineapple' },
			{ value: '7', label: 'Jam' },
			{ value: '8', label: 'Leituce' },
			{ value: '9', label: 'Carbonara' },
			{ value: '10', label: 'Bacon' }
		]
	};

	const [select1, setSelect1] = useState(select1Initial);
	const [select2, setSelect2] = useState(select2Initial);

	const onSelection1Change = (selectedOptions) => {
		setSelect1({ ...select1, selectedOptions: selectedOptions });
	}

	const onSelection2Change = (selectedOptions) => {
		setSelect2({ ...select2, selectedOptions: selectedOptions });
	}

	return (
		<Fragment>
			<h1>Select</h1>
			<div className="container">
				<div className="title">Select Single</div>
				<Select
					name={select1.name}
					placeholder={select1.placeholder}
					multiple={select1.multiple}
					disabled={select1.disabled}
					selectedOptions={select1.selectedOptions}
					options={select1.options}
					onSelectionChange={onSelection1Change}></Select>
				<div className="title">Select Multiple</div>
				<Select
					name={select2.name}
					placeholder={select2.placeholder}
					multiple={select2.multiple}
					disabled={select2.disabled}
					selectedOptions={select2.selectedOptions}
					options={select2.options}
					onSelectionChange={onSelection2Change}></Select>
			</div>
		</Fragment >
	);
}

export default SelectsContainer;