import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { REQUIRED_MESSAGE, INVALID_EMAIL } from '../../consts';

const validateEmail = (string) => {
	const EMAIL_REGEX = /^\w+([+.-]?\w+)*@\w+([+.-]?\w+)*(\.[a-zA-Z]{2,})+$/;
	return EMAIL_REGEX.test(String(string).toLowerCase());
};

const MyEmailField = ({
	name,
	label,
	required,
	multiline,
	onChange,
	info
}) => {
	const [error, setError] = useState("");
	const handleChange = useCallback((event) => {
		const emailIsValid = validateEmail(event.target.value);
		let valid = true;
		if (required) {
			if (event.target.value && emailIsValid) {
				setError("");
			} else if (event.target.value && !emailIsValid) {
				setError(INVALID_EMAIL);
				valid = false;
			} else {
				setError(REQUIRED_MESSAGE);
				valid = false;
			}
		} else if (event.target.value && !emailIsValid) {
			setError(INVALID_EMAIL);
			valid = false;
		} else {
			setError("");
		}
		onChange(event.target.value, valid, name);
	}, [name, onChange, required]);

	return <TextField
		key={`${name}_textField`}
		id={name}
		label={label}
		required={required}
		multiline={multiline}
		onChange={handleChange}
		error={!!error}
		helperText={error}
		rows={5}
		fullWidth
		value={info.value}
	/>
};

export default MyEmailField;