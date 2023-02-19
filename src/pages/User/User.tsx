import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import { Div, FollowersDiv, Img, ImgDiv, InfoDiv, P, ProfileA, SubDiv, UserDataDiv, UserP } from './User.styles';

const User: React.FC = () => {
	const navigation = useNavigate();
	const { state } = useLocation();
	const { login, avatar_url, html_url, followers_url } = state.userData;
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
		axios.get(followers_url, {
			auth: {
				username: process.env.GITHUB_USERNAME as string,
				password: process.env.GITHUB_ACCESS_TOKEN as string
			}
		})
			.then(function(response) {
				setFollowers(response.data.map((data) => data.login));
			});
	}, []);

	const onChange = async (event) => {
		const response = await axios.get(followers_url, {
			auth: {
				username: process.env.GITHUB_USERNAME as string,
				password: process.env.GITHUB_ACCESS_TOKEN as string
			}
		});

		const followersInfo = response.data
			.filter((data) => data.login.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
			.map((data) => data.login);
		setFollowers(followersInfo);
	};

	const onClickReturn = () => {
		navigation(-1);
	};

	return (
		<Div>
			<SubDiv>
				<p onClick={onClickReturn}>Volver</p>
				<ImgDiv>
					<Img src={avatar_url} />
				</ImgDiv>
				<InfoDiv>
					<UserP>{login}</UserP>
					<ProfileA href={html_url} >Ver perfil en GitHub</ProfileA>
				</InfoDiv>
			</SubDiv>
			<SubDiv>
				<h1>Followers</h1>
				<TextInput placeholder="Busca seguidores..." onChange={onChange} />
				<FollowersDiv>
					{followers.map((follower, index) =>
						<P key={index} >{follower}</P>
					)}
				</FollowersDiv>
			</SubDiv>
		</Div>
	);
};

export default User;
