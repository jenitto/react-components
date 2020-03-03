import React, { Fragment, useState } from 'react';
import Select from '../components/Inputs/Select/Select';

const SelectsContainer = () => {

	const selectInitial = {
		multiple: false,
		selectedOptions: [],
		options: [
			{ value: 'value11', label: 'value11' },
			{ value: 'value12', label: 'value12' },
			{ value: 'value13', label: 'value13', disabled: true },
			{ value: 'value14', label: 'value14' },
			{ value: 'value15', label: 'value15' },
		]
	};

	const [select, setSelect] = useState(selectInitial);


	const handleSelectChanges = (selectedOption) => {
		setSelect({ ...select, selectedOptions: selectedOption });
	}

	return (
		<Fragment>
			<h1>Select</h1>
			<div className="container">
				<div className="title">Select 1</div>
				<Select
					selectData={select}
					onSelectionChange={handleSelectChanges}></Select>
			</div>
		</Fragment>
	);
}

export default SelectsContainer;