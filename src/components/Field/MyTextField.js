import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { REQUIRED_MESSAGE } from '../../consts';

const MyTextField = ({
	name,
	label,
	required,
	multiline,
	onChange,
	info
}) => {
	const [error, setError] = useState("");
	const handleChange = useCallback((event) => {
		let valid = true;
		if (required) {
			if (event.target.value) {
				setError("");
			} else {
				setError(REQUIRED_MESSAGE);
				valid = false;
			}
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

export default MyTextField;
