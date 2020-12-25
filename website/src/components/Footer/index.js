import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
	return <Paper>
		<Grid container spacing={3} key={`footer_container`}>
			<Grid item key={`footer_item_0`} style={{ flexGrow: 1 }} xs={3}>
				<img src={"/ADot.jpg"} alt={"A Dot Logo"}/>
			</Grid>
			<Grid item key={`footer_item_1`} style={{ flexGrow: 1 }} xs={3}>
				<Typography style={{ textAlign: "center", padding: "16px" }}>
					Copyright © 2015
				</Typography>
			</Grid>
			<Grid item key={`footer_item_2`} style={{ flexGrow: 1 }} xs={3}>
				<a href={"https://www.paypal.com/us/webapps/mpp/how-paypal-works"}>
					<img src={"https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"} alt={"paypal link"}/>
				</a>
			</Grid>
		</Grid>
	</Paper>;
};

export default Footer;

