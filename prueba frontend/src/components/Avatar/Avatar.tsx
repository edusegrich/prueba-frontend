import React from 'react';
import { Div, Img } from './Avatar.styles';

interface Avatar {
	src: string;
}

const Avatar: React.FC<Avatar> = ({
	src
}) => {
	return (
		<Div>
			<Img src={src} />
		</Div>
	);
};

export default Avatar;
