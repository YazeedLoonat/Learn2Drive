/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Field from '../Field';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	field: {
		textAlign: "left",
		flexGrow: 1
	}
}));

const Form = ({ rows, onChange, fieldInfo }) => {
	const classes = useStyles();
	return rows.map((fields, i) => {
		return <Grid container spacing={3} key={`grid_${i}`}>
			{
				fields.map((field, j) => {
					return <Grid item key={`grid_${i}_${j}`} className={classes.field}>
						<Field
							key={`field_${i}_${j}`}
							name={field.name}
							label={field.label}
							required={field.required}
							multiline={field.multiline}
							onChange={onChange}
							type={field.type}
							info={fieldInfo[field.name] || { value: "" }}
						/>
					</Grid>;
				})
			}
		</Grid>
	})
};

export default Form;