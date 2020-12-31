import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormController from '../FormController';
import ContentList from '../ContentList';
import { REGISTER_LIST_INFO } from '../../consts';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	subHeader: {
		marginTop: "5%"
	}
}));

const Register = () => {
	const classes = useStyles();
	return <div>
		<Grid container spacing={3} className={classes.subHeader}>
			<Grid item xs={6}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Available class dates </Typography>
						<Typography align={"left"}>
							Due to Covid19 limited availability please call to register class availability is on a first come first serve basis
						</Typography>
						<ContentList listInfo={REGISTER_LIST_INFO} dense={true} />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} className={classes.header}> All classes take place from 8AM-1PM </Typography>
						<Typography> Register for a class by filling out this form </Typography>
						<div>
							<FormController formName={"Register"} />
						</div>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</div>;
};

export default Register;