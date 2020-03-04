import React, { Fragment, useState } from 'react';
import Select from '../components/Inputs/Select/Select';

const SelectsContainer = () => {

	const message1 = { type: 'success', label: 'Válido!' };
	const message2 = { type: 'error', label: 'Hay un error!' };
	const message3 = { type: 'info', label: 'Mensaje informativo' };

	const select1Initial = {
		name: 'País',
		placeholder: 'Selecciona un país',
		multiple: false,
		selectedOptions: [],
		disabled: false,
		message: {},
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
		message: message3,
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

	const select3Initial = {
		name: 'Disabled',
		placeholder: 'Select deshabilitado',
		multiple: false,
		selectedOptions: [{ value: '1', label: 'Extra cheese' }],
		disabled: true,
		message: message2,
		options: [
			{ value: '1', label: 'Extra cheese' },
			{ value: '2', label: 'Mushroom' }
		]
	};

	const [select1, setSelect1] = useState(select1Initial);
	const [select2, setSelect2] = useState(select2Initial);
	const [select3, setSelect3] = useState(select3Initial);

	const onSelection1Change = (selectedOptions) => {
		setSelect1({ ...select1, selectedOptions: selectedOptions, message: message1 });
	}

	const onSelection2Change = (selectedOptions) => {
		setSelect2({ ...select2, selectedOptions: selectedOptions });
	}

	const onSelection3Change = (selectedOptions) => {
		setSelect3({ ...select2, selectedOptions: selectedOptions });
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
					message={select1.message}
					onSelectionChange={onSelection1Change}></Select>
				<div className="title">Select Multiple</div>
				<Select
					name={select2.name}
					placeholder={select2.placeholder}
					multiple={select2.multiple}
					disabled={select2.disabled}
					selectedOptions={select2.selectedOptions}
					options={select2.options}
					message={select2.message}
					onSelectionChange={onSelection2Change}></Select>
				<div className="title">Select Disabled</div>
				<Select
					name={select3.name}
					placeholder={select3.placeholder}
					multiple={select3.multiple}
					disabled={select3.disabled}
					selectedOptions={select3.selectedOptions}
					options={select3.options}
					message={select3.message}
					onSelectionChange={onSelection3Change}></Select>
			</div>
		</Fragment >
	);
}

export default SelectsContainer;