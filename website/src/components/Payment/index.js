import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	headerBlue: {
		marginTop: "2%",
		color: "#293E6A"
	},
	subHeader: {
		marginTop: "2%",
		marginLeft: "15%"
	}
}));

const LIST_INFO_1 = [
	"Cash",
	"Personal Check",
	"Money Order",
	"Cashiers Check",
	"Debit/Credit Card"
];

const LIST_INFO_2 = [
	"Packages are valid for one year from date of purchase",
	"All sales are final - No Refunds",
	"Unused time cannot be split or transferred to another student",
	"No Refunds issued for unused time",
	"Drive cancellations within 24hrs of a scheduled drive may be subject to a fee"
];

const Payment = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> How to Pay </Typography>
		<Typography variant={"h6"} align={"left"} className={classes.subHeader}> Payment can be made at the class. We accept: </Typography>
		<ContentList listInfo={LIST_INFO_1} />

		<Typography variant={"h5"} className={classes.headerBlue}> Please call before making a payment </Typography>

		<Typography variant={"h6"} align={"left"} className={classes.subHeader}> Please Note: </Typography>
		<ContentList listInfo={LIST_INFO_2} />
	</div>;
};

export default Payment;