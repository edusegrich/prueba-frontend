import React from 'react';
import Avatar from '../Avatar/Avatar';
import { CardDiv, InfoDiv, P, ProfileA, UserP } from './ItemCard.styles';
import foto from '../../foto.jpg';

interface ItemCardProps {
	login: string;
	type: string;
	score: number;
	profileURL: string;
	image: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
	login,
	type,
	score,
	profileURL,
	image
}) => {
	return (
		<CardDiv>
			<Avatar src={image} />
			<InfoDiv>
				<UserP>{login}</UserP>
				{type === 'User'
					? <P>👤 {type}</P>
					: <P>🏢 {type}</P>
				}
				
				<P>⭐️ {score}</P>
				<ProfileA href={profileURL} target="_blank" >Ir al perfil</ProfileA>
			</InfoDiv>
		</CardDiv>
	);
};

export default ItemCard;
