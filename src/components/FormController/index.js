/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Form from '../Form';
import Action from '../Action';
import { makeStyles } from '@material-ui/core/styles';
import { SUBMIT, FORMS } from '../../consts';

const useStyles = makeStyles(() => ({
	container: {
		textAlign: "left",
		marginTop: "2%"
	}
}));

const handleSubmit = fieldInfo => {
	console.log("9:", fieldInfo);
};

const testForDisabled = (name, fieldInfo)  => {
	if (name === SUBMIT) {
		const index = Object.keys(fieldInfo).findIndex(key => !fieldInfo[key].valid);
		return index >= 0;
	}
	return false;
};

const FormController = ({ formName }) => {
	const classes = useStyles();
	const [fieldInfo, setFieldInfo] = useState({});
	const [actionInfo, setActionInfo] = useState({});
	const [form, ] = useState(FORMS[formName]);
	useEffect(() => {
		const tempFields = {};
		form.rows.forEach(fields => {
			fields.forEach(field => {
				tempFields[field.name] = {
					value: field.value,
					valid: field.required ? !!field.value : true
				};
			});
		});
		setFieldInfo(tempFields);
	}, [formName]);

	useEffect(() => {
		const tempActions = {};
		form.actions.forEach(action => {
			tempActions[action.name] = testForDisabled(action.name, fieldInfo);
		});
		setActionInfo(tempActions);
	}, [formName, fieldInfo]);

	const onClick = (name) => {
		if (name === SUBMIT) {
			handleSubmit(fieldInfo);
		}
	};

	const onChange = (value, valid, name) => {
		setFieldInfo({
			...fieldInfo,
			[name]: {
				value,
				valid
			}
		});
	};

	return <div>
		<Form rows={form.rows} onChange={onChange} fieldInfo={fieldInfo} />
		<div className={classes.container}>
			{
				form.actions.map((action, i) => {
					return <Action
						key={`action_${i}`}
						variant="outlined"
						onClick={onClick}
						label={action.label}
						name={action.name}
						disabled={actionInfo[action.name]}
					/>;
				})
			}
		</div>
	</div>;
};

export default FormController;