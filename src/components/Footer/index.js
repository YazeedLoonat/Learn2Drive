import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	container: {
		position: "absolute",
		width: "80%",
		left: "10%",
		marginTop: "5%"
	},
	padded: {
		paddingTop: "16px"
	}
}));

const Footer = () => {
	const classes = useStyles();
	return <div className={classes.container}>
		<Grid container spacing={3} key={`footer_container`} justify={"space-evenly"}>
			<Grid item key={`footer_item_0`}>
				<img src={"/ADot.jpg"} alt={"A Dot Logo"}/>
			</Grid>
			<Grid item key={`footer_item_1`}>
				<Typography className={classes.padded}>
					Copyright © 2015
				</Typography>
			</Grid>
			<Grid item key={`footer_item_2`}>
				<a href={"https://www.paypal.com/us/webapps/mpp/how-paypal-works"}>
					<img src={"https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"} alt={"paypal link"}/>
				</a>
			</Grid>
		</Grid>
	</div>;
};

export default Footer;

