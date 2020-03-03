import React, { Fragment, useState } from 'react';
import Checkbox from "../components/Checkboxes/Checkbox/Checkbox";

const CheckboxContainer = () => {
	const [check1, setCheck1] = useState({ checked: false, indeterminate: false });
	const [check2, setCheck2] = useState({ checked: false, indeterminate: true });
	const [check3, setCheck3] = useState({ checked: true, indeterminate: false });

	const handleCheck1 = () => {
		setCheck1(handleCheckboxState(check1));
	}

	const handleCheck2 = () => {
		setCheck2(handleCheckboxState(check2));
	}

	const handleCheck3 = ({ value, checked }) => {
		setCheck3({ value: value, checked: checked, indeterminate: false });
	}

	const handleCheckboxState = (check) => {
		let checkboxState;

		if (!check.checked && !check.indeterminate) {
			checkboxState = {
				checked: false,
				indeterminate: true
			};
		} else if (!check.checked && check.indeterminate) {
			checkboxState = {
				checked: true,
				indeterminate: false
			};
		} else {
			checkboxState = {
				checked: false,
				indeterminate: false
			};
		}
		return checkboxState;
	}

	return (
		<Fragment>
			<h1>Checkbox</h1>
			<div className="container">
				<div className="title">Checkbox</div>
				<Checkbox
					value='check1'
					checked={check1.checked}
					indeterminate={check1.indeterminate}
					setChecked={handleCheck1}>
					Checkbox Label
					</Checkbox>
				<Checkbox
					value='check2'
					checked={check2.checked}
					indeterminate={check2.indeterminate}
					setChecked={handleCheck2}>
					Checkbox Label
					</Checkbox>
				<Checkbox
					value='check3'
					checked={check3.checked}
					indeterminate={check3.indeterminate}
					setChecked={handleCheck3}>
					Checkbox Label
					</Checkbox>
				<br />
				<Checkbox
					value='check4'
					checked={false}
					disabled={true}
					setChecked={setCheck1}>Checkbox Label</Checkbox>
				<Checkbox
					value='check5'
					checked={false}
					indeterminate={true}
					disabled={true}
					setChecked={setCheck1}>Checkbox Label</Checkbox>
				<Checkbox
					value='check6'
					checked={true}
					disabled={true}
					setChecked={setCheck1}>Checkbox Label</Checkbox>
			</div>
		</Fragment>
	);
}

export default CheckboxContainer;