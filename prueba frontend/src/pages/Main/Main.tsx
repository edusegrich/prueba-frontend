import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard/ItemCard';
import TextInput from '../../components/TextInput';
import { Div, Img, ItemCardsDiv, TextInputDiv } from './Main.styles';
import GitHub from '../../GitHub.png';

interface UserProps {
	id: string;
	login: string;
	type: string;
	score: number;
	avatar_url: string;
	html_url: string;
	isOverScore?: boolean;
	followers_url: string;
}

interface SearchProps {
	login?: string;
	score?: string;
}

const Main: React.FC = () => {
	const [users, setUsers] = useState<UserProps[]>([]);
	const [search, setSearch] = useState<SearchProps>();

	useEffect(() => { 
		const search = localStorage.getItem('search');
		if (search != undefined) {
			const parsedSearch = JSON.parse(search);
			setSearch(parsedSearch);
			if (parsedSearch.login) searchUsers(parsedSearch.login).then(() => {
				if (parsedSearch.score) markUsers(parsedSearch.score);
			});
		} 
	}, []);

	useEffect(() => { 
		if (search != undefined) localStorage.setItem('search', JSON.stringify(search)); 
	}, [search]);

	const searchUsers = async (text: string) => {
		const response = await axios.get('https://api.github.com/search/users', {
			params: {
				q: text
			},
			auth: {
				username: process.env.GITHUB_USERNAME as string,
				password: process.env.GITHUB_ACCESS_TOKEN as string
			}
		});

		const usersInfo = response.data.items.map((data) => {
			return {
				id: data.id,
				login: data.login,
				type: data.type,
				score: data.score,
				avatar_url: data.avatar_url,
				html_url: data.html_url,
				followers_url: data.followers_url
			};
		});
		setUsers(usersInfo);
	};

	const onChangeLogin = (event) => {
		if (event.target.value.length >= 4) {
			setSearch((search) => ({
				...search,
				login: event.target.value
			}));

			searchUsers(event.target.value);
		}
	};

	const markUsers = (num: string) => {
		setUsers(users => users.map((user) => {
			if (num === '') {
				user.isOverScore = undefined;
			} else {
				user.isOverScore = user.score >= parseInt(num);
			}
			
			return user;
		}));
	};

	const onChangeScore = (event) => {
		setSearch((search) => ({
			...search,
			score: event.target.value
		}));

		markUsers(event.target.value);
	};

	return (
		<Div>
			<Img src={GitHub} />
			<TextInputDiv>
				<TextInput placeholder="Buscar un usuario en GitHub..." onChange={onChangeLogin} />
				<TextInput placeholder="Indica un score..." onChange={onChangeScore} />
			</TextInputDiv>
			<ItemCardsDiv>
				{users.map((user) =>
					<ItemCard
						key={user.id}
						login={user.login}
						type={user.type}
						score={user.score}
						image={user.avatar_url}
						profileURL={user.html_url}
						isOverScore={user.isOverScore}
						followersURL={user.followers_url}
					/>
				)}
			</ItemCardsDiv>
		</Div>
	);
};

export default Main;
