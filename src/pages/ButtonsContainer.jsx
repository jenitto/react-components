import React, { Fragment } from 'react';
import ButtonPrimary from '../components/Buttons/Buttons-primary';
import ButtonSecondary from '../components/Buttons/Buttons-secondary';

const ButtonsContainer = () => {

	const onClick = () => {
		console.log('click');
	}

	return (
		<Fragment>
			<h1>Buttons:</h1>
			<div className="container">
				<div className="column">
					<div className="title">Button primary</div>
					<ButtonPrimary
						label="Btn 1"
						hasRipple
						onClick={onClick}></ButtonPrimary>
					<ButtonPrimary
						label="Btn 2"
						onClick={onClick}></ButtonPrimary>
					<ButtonPrimary
						label="Btn 3"
						disabled
						onClick={onClick}></ButtonPrimary>
					<ButtonPrimary
						label="Btn 4"
						isLoading
						onClick={onClick}></ButtonPrimary>
				</div>
				<div className="column">
					<div className="title">Button secondary</div>
					<ButtonSecondary
						label="Btn 1"
						hasRipple
						onClick={onClick}></ButtonSecondary>
					<ButtonSecondary
						label="Btn 2"
						onClick={onClick}></ButtonSecondary>
					<ButtonSecondary
						label="Btn 3"
						disabled
						onClick={onClick}></ButtonSecondary>
				</div>
			</div>
		</Fragment>
	);
};

export default ButtonsContainer;