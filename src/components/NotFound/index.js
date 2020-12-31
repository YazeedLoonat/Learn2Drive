import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	icon: {
		color: "red"
	}
}));

const NotFound = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}>
			<ErrorIcon className={classes.icon} /> 404 | Page Not Found <ErrorIcon className={classes.icon} />
		</Typography>
	</div>;
};

export default NotFound;