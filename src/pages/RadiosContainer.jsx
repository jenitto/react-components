import React, { Fragment, useState } from 'react';
import RadioGroup from '../components/Checkboxes/RadioGroup/RadioGroup';

const RadiosContainer = () => {

	const form1Initial = {
		name: 'radioGroup1',
		selectedOption: 'value11',
		options: [
			{ value: 'value11', label: 'value11' },
			{ value: 'value12', label: 'value12' },
			{ value: 'value13', label: 'value13', disabled: true },
			{ value: 'value14', label: 'value14' },
			{ value: 'value15', label: 'value15' },
		]
	};
	const form2Initial = {
		name: 'radioGroup2',
		selectedOption: 'value23',
		options: [
			{ value: 'value21', label: 'value21' },
			{ value: 'value22', label: 'value22' },
			{ value: 'value23', label: 'value23', disabled: true },
		]
	};

	const [form1, setForm1] = useState(form1Initial);
	const [form2, setForm2] = useState(form2Initial);


	const handleFormChanges1 = (selectedOption) => {
		setForm1({ ...form1, selectedOption: selectedOption });
	}

	const handleFormChanges2 = (selectedOption) => {
		setForm2({ ...form2, selectedOption: selectedOption });
	}

	return (
		<Fragment>
			<h1>Radio</h1>
			<div className="container">
				<div className="title">{form1.name}</div>
				<RadioGroup form={form1} onSelectionChange={handleFormChanges1}></RadioGroup>
				<div className="title">{form1.name}</div>
				<RadioGroup form={form2} onSelectionChange={handleFormChanges2}></RadioGroup>
			</div>
		</Fragment>
	);
}

export default RadiosContainer;