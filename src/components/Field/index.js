import React from 'react';
import MyTextField from './MyTextField';
import MyEmailField from './MyEmailField';
import MySelectField from './MySelectField';
import MyDateField from './MyDateField';

const TYPE_MAP = {
	email: MyEmailField,
	select: MySelectField,
	date: MyDateField,
	text: MyTextField,
};

const Field = ({
	name,
	label,
	required,
	multiline,
	onChange,
	type,
	info
}) => {
	const ThisField = TYPE_MAP[type];
	return <ThisField
		name={name}
		label={label}
		required={required}
		multiline={multiline}
		onChange={onChange}
		info={info}
	/>
};

export default Field;