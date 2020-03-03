import React, { Fragment } from 'react';
import InputText from '../components/Inputs/InputText/InputText';
import InputPassword from '../components/Inputs/InputPassword/InputPassword';

const InputsContainer = () => {

	return (
		<Fragment>
			<h1>Input</h1>
			<div className="container">
				<div className="column">
					<div className="title">Input text</div>
					<InputText
						label="Label"></InputText>
					<InputText
						message={{ type: 'info', label: 'Mensaje informativo' }}
						label="Label"></InputText>
					<InputText
						message={{ type: 'success', label: 'Válido!' }}
						label="Label"></InputText>
					<InputText
						label="Label"
						message={{ type: 'error', label: 'Hay un error!' }}></InputText>
					<InputText
						label="Label"
						disabled={true}></InputText>
					<InputText
						label="Label"
						message={{ type: 'success', label: 'Válido!' }}
						disabled={true}></InputText>
				</div>
				<div className="column">
					<div className="title">Input password</div>
					<InputPassword
						label="Label"></InputPassword>
					<InputPassword
						message={{ type: 'info', label: 'Mensaje informativo' }}
						label="Label"></InputPassword>
					<InputPassword
						message={{ type: 'success', label: 'Válido!' }}
						label="Label"></InputPassword>
					<InputPassword
						label="Label"
						message={{ type: 'error', label: 'Hay un error!' }}></InputPassword>
					<InputPassword
						label="Label"
						disabled={true}></InputPassword>
					<InputPassword
						label="Label"
						message={{ type: 'success', label: 'Válido!' }}
						disabled={true}></InputPassword>
				</div>
			</div>
		</Fragment>
	);
};

export default InputsContainer;
