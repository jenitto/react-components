import React, { Fragment, useState } from 'react';
import Card1 from '../components/Cards/Card-1/Card-1';
import Card2 from '../components/Cards/Card-2/Card-2';
import { users } from '../database/users';
import Card3 from '../components/Cards/Card-3/Card-3';

const CardsContainer = () => {

	const [selected1, setSelected1] = useState([]);
	const [selected2, setSelected2] = useState([]);

	const cards1 = [
		{
			id: 1,
			name: 'ZARA Brasil São Paulo',
			description: 'Prenda en almacén',
			selectable: true
		},
		{
			id: 121,
			name: 'ECOM ZARA Brasil São Paulo',
			description: 'Prenda colgada',
			abbr: 'br',
			disabled: true,
			selectable: true
		},
		{
			id: 2111,
			name: 'ZARA London',
			description: 'Prenda en almacén',
			selectable: true
		},
		{
			id: 3,
			name: 'ZARA Arteixo',
			description: 'Agotado',
			selectable: false
		}
	];

	const cards2 = users.map((user) => {
		return { ...user, status: 'Coordinador' }
	});

	const changeSelected1 = (item) => {
		changeSelected(item, selected1, setSelected1);
	}

	const changeSelected2 = (item) => {
		changeSelected(item, selected2, setSelected2);
	}

	const changeSelected = (item, original, callback) => {
		if (original.find((a) => a.id === item.id)) {
			callback(original.filter((a) => a.id !== item.id));
		} else {
			callback([...original, item]);
		}
	}

	return (
		<Fragment>
			<h1>Cards:</h1>
			<div className="container">
				<div className="column">
					<div className="title">Card 1</div>
					{cards1.map((card) =>
						<div
							style={{ margin: '2rem' }}
							key={`card1-${card.id}`}>
							<Card1
								title={card.name}
								subtitle={card.description}
								abbr={card.abbr}
								selectable={card.selectable}
								disabled={card.disabled}
								checked={!!selected1.find((item) => item.id === card.id)}
								setChecked={() => changeSelected1(card)} />
						</div>
					)}
					<div className="title">Card 2</div>
					{cards2.map((card) =>
						<div
							style={{ margin: '2rem' }}
							key={`card2-${card.id}`}>
							<Card2
								title={`${card.name} ${card.surname}`}
								subtitle={card.description}
								image={card.avatar}
								selectable={card.selectable}
								disabled={card.disabled}
								chipLabel={card.status}
								checked={!!selected2.find((item) => item.id === card.id)}
								setChecked={() => changeSelected2(card)} />
						</div>
					)}
				</div>
				<div className="column">
					<div className="title">Cards</div>
					{cards2.map((card) =>
						<div
							style={{ margin: '2rem' }}
							key={`card2-${card.id}`}>
							<Card3
								title={`${card.name} ${card.surname}`}
								subtitle={card.name}
								description={card.description}
								image={card.avatar}
								selectable={card.selectable}
								disabled={card.disabled}
								checked={!!selected2.find((item) => item.id === card.id)}
								setChecked={() => changeSelected2(card)} />
						</div>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default CardsContainer;