import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';

const ERROR_MESSAGE = "This field is required";
const Field = ({
	name,
	label,
	required,
	multiline,
	onChange
}) => {
	const [error, setError] = useState("");
	const handleChange = useCallback((event) => {
		onChange(event.target.value, name, required);
		if (required) {
			if (event.target.value) {
				setError("");
			} else {
				setError(ERROR_MESSAGE);
			}
		} else {
			setError("");
		}
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
	/>
};

export default Field;