/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Form from '../Form';
import Action from '../Action';
import Grid from '@material-ui/core/Grid';

const SUBMIT = "submit";
const FORMS = {
	ContactUs: {
		actions: [
			{
				name: SUBMIT,
				label: "Send"
			}
		],
		rows: [
			[{
				name: "name",
				label: "Name",
				required: true,
				multiline: false,
				value: ""
			}],
			[{
				name: "email",
				label: "Email",
				required: true,
				multiline: false,
				value: ""
			}],
			[{
				name: "subject",
				label: "Subject",
				required: true,
				multiline: false,
				value: ""
			}],
			[{
				name: "message",
				label: "Message",
				required: true,
				multiline: true,
				value: ""
			}]
		]
	}
};

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

	const onChange = (value, name, required) => {
		const toOverwrite = {
			value: value,
			valid: required ? !!value : true
		};
		setFieldInfo({
			...fieldInfo,
			[name]: toOverwrite
		});
	};

	return <div style={{ flexGrow: 1 }}>
		<Grid container spacing={3} key={`form`}>
			<Grid item key={`form_body`} xs={5}>
				<Form rows={form.rows} onChange={onChange} />
			</Grid>
			<Grid item key={`form_actions`} xs={2}>
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
			</Grid>
		</Grid>
	</div>;
};

export default FormController;