import React, { Fragment, useState } from 'react';
import Switch from '../components/Checkboxes/Switch/Switch';

const SwitchsContainer = () => {

	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(true);

	return (
		<Fragment>
			<h1>Switch</h1>
			<div className="container">
				<div className="title">Switch button</div>
				<Switch checked={switch1} setChecked={setSwitch1}>Switch Label</Switch>
				<Switch checked={switch2} setChecked={setSwitch2}>Switch Label</Switch>
				<Switch checked={false} disabled={true} setChecked={setSwitch1}>Switch Label</Switch>
				<Switch checked={true} disabled={true} setChecked={setSwitch1}>Switch Label</Switch>
			</div>
		</Fragment>
	);
};

export default SwitchsContainer;
