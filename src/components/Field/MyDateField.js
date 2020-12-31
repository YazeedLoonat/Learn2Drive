import 'date-fns';
import React, { useCallback, useState } from 'react';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { REQUIRED_MESSAGE } from '../../consts';

const MyDateField = ({
	name,
	label,
	required,
	onChange,
	info
}) => {
	const [error, setError] = useState("");
	const handleChange = useCallback((date) => {
		let valid = true;
		if (required) {
			if (date) {
				setError("");
			} else {
				setError(REQUIRED_MESSAGE);
				valid = false;
			}
		} else {
			setError("");
		}
		onChange(date, valid, name);
	}, [name, onChange, required]);

	return <MuiPickersUtilsProvider utils={DateFnsUtils}>
		<KeyboardDatePicker
			disableToolbar
			variant="inline"
			format="MM/dd/yyyy"
			margin="normal"
			id={name}
			label={label}
			value={info.value}
			onChange={handleChange}
			KeyboardButtonProps={{ 'aria-label': 'change date' }}
			InputLabelProps={{ shrink: true }}
			error={!!error}
			helperText={error}
			required={required}
		/>
	</MuiPickersUtilsProvider>
};

export default MyDateField;