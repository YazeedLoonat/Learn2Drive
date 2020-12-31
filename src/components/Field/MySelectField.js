import React, { useCallback, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { REQUIRED_MESSAGE } from '../../consts';

const OPTIONS = {
	package: [{
		value: 0,
		label: "First Package"
	}]
};

const MySelectField = ({
	name,
	label,
	required,
	onChange,
	info
}) => {
	const [error, setError] = useState("");
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(OPTIONS[name]);
	}, [name]);

	const handleChange = useCallback((event) => {
		let valid = true;
		if (required) {
			if (event.target.value || event.target.value === 0) {
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
		onChange={handleChange}
		error={!!error}
		helperText={error}
		fullWidth
		value={info.value}
		select
	>
		{
			options.map((option, index) => {
				return <MenuItem key={`select_option_${index}`} value={option.value}>{ option.label }</MenuItem>;
			})
		}
	</TextField>;
};

export default MySelectField;