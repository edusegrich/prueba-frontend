import React, { useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard/ItemCard';
import TextInput from '../../components/TextInput';
import { Div, ItemCardsDiv, TextInputDiv } from './Main.styles';

const Main: React.FC = () => {
	const [users, setUsers] = useState([]);

	const onChange = async (event) => {
		const response = await axios.get('https://api.github.com/search/users', {
			params: {
				q: event.target.value
			},
			auth: {
				username: 'edusegrich',
				password: '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'
			}
		});

		const cards = response.data.items.map((data) =>
			<ItemCard
				key={data.id}
				login={data.login}
				type={data.type}
				score={data.score}
				image={data.avatar_url}
				profileURL={data.html_url}
			/>
		);
		setUsers(cards);
	};

	return (
		<Div>
			<TextInputDiv>
				<TextInput placeholder="Buscar un usuario en GitHub..." onChange={onChange} />
			</TextInputDiv>
			<ItemCardsDiv>
				{users}
			</ItemCardsDiv>
		</Div>
	);
};

export default Main;
