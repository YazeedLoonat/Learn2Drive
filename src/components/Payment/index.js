import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';
import { PAYMENT_LIST_INFO_1, PAYMENT_LIST_INFO_2 } from '../../consts';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	headerBlue: {
		marginTop: "2%",
		color: "#293E6A"
	}
}));

const Payment = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> How to Pay </Typography>
		<Typography variant={"h6"} className={classes.header}> Payment can be made at the class or online. We accept: </Typography>
		<ContentList listInfo={PAYMENT_LIST_INFO_1} />

		<Typography variant={"h5"} className={classes.headerBlue}> Please call before making a payment </Typography>

		<Typography variant={"h6"} className={classes.header}> Please Note: </Typography>
		<ContentList listInfo={PAYMENT_LIST_INFO_2} />
	</div>;
};

export default Payment;