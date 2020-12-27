import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormController from '../FormController';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	subHeader: {
		marginTop: "5%",
		marginLeft: "15%"
	},
	formContainer: {
		width: "70%",
		marginLeft: "15%"
	}
}));

const ContactUs = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Contact Us </Typography>
		<Typography variant={"h6"} className={classes.subHeader}> Send us your questions or comments by filling out the form below or call us at (520) 245-7893 </Typography>
		<div className={classes.formContainer}>
			<FormController formName={"ContactUs"} />
		</div>
	</div>;
};

export default ContactUs;