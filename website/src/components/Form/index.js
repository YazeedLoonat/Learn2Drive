/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Field from '../Field';
import Grid from '@material-ui/core/Grid';

const Form = ({ rows, onChange }) => {
	return rows.map((fields, i) => {
		return <Grid container spacing={3} key={`grid_${i}`}>
			{
				fields.map((field, j) => {
					return <Grid item key={`grid_${i}_${j}`} style={{ flexGrow: 1 }}>
						<Field
							key={`field_${i}_${j}`}
							name={field.name}
							label={field.label}
							required={field.required}
							multiline={field.multiline}
							onChange={onChange}
						/>
					</Grid>;
				})
			}
		</Grid>
	})
};

export default Form;