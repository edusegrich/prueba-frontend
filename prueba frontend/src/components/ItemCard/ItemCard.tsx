import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import { CardDiv, CardDivGreen, CardDivRed, InfoDiv, P, ProfileA, UserP } from './ItemCard.styles';

interface ItemCardProps {
	login: string;
	type: string;
	score: number;
	profileURL: string;
	image: string;
	isOverScore?: boolean;
	followersURL: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
	login,
	type,
	score,
	profileURL,
	image,
	isOverScore,
	followersURL,
}) => {
	const navigation = useNavigate();

	const onClick = () => {
		navigation('/user', { 
			state: {
				userData: {
					login,
					avatar_url: image,
					html_url: profileURL,
					followers_url: followersURL
				}
			}
		});
	};

	return (
		<>
			{isOverScore === undefined
				? (
					<CardDiv onClick={onClick}>
						<Avatar src={image} />
						<InfoDiv>
							<UserP>{login}</UserP>
							{type === 'User'
								? <P>👤 {type}</P>
								: <P>🏢 {type}</P>
							}

							<P>🎯 {score}</P>
							<ProfileA href={profileURL} target="_blank" >Ir al perfil</ProfileA>
						</InfoDiv>
					</CardDiv>
				)
				: isOverScore === true
					? (
						<CardDivGreen onClick={onClick}>
							<Avatar src={image} />
							<InfoDiv>
								<UserP>{login}</UserP>
								{type === 'User'
									? <P>👤 {type}</P>
									: <P>🏢 {type}</P>
								}

								<P>🎯 {score}</P>
								<ProfileA href={profileURL} target="_blank" >Ir al perfil</ProfileA>
							</InfoDiv>
						</CardDivGreen>
					) : (
						<CardDivRed onClick={onClick}>
							<Avatar src={image} />
							<InfoDiv>
								<UserP>{login}</UserP>
								{type === 'User'
									? <P>👤 {type}</P>
									: <P>🏢 {type}</P>
								}

								<P>🎯 {score}</P>
								<ProfileA href={profileURL} target="_blank" >Ir al perfil</ProfileA>
							</InfoDiv>
						</CardDivRed>
					)}
		</>
	);
};

export default ItemCard;
