import React from 'react';
import { Input } from './TextInput.styles';

interface TextInput {
	placeholder: string;
	onChange: (event: any) => Promise<void> | void;
}

const TextInput: React.FC<TextInput> = ({
	placeholder,
	onChange
}) => {
	return (
		<Input
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};


export default TextInput;
