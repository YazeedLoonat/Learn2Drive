import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import GMap from '../GMap';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	subHeader: {
		marginTop: "5%"
	}
}));

const Location = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> We are located at 437 West Thurber Road, Tucson, AZ 85705 </Typography>

		<Grid container spacing={3} className={classes.subHeader}>
			<Grid item xs={6}>
				<Card>
					<CardContent>
						<GMap />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardContent>
					<List className={classes.header}>
						<ListItem disableGutters={true}>
							<ListItemText>
								<Typography>
									Classroom instruction is available Saturday 8 am to approximately 1 pm. <a href="/register">Check here for scheduled classes  </a>
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem disableGutters={true}>
							<ListItemText>
								<Typography>
									Driving instruction is flexible so you get to pick your own schedule. Trainers will come to you at the pre-arranged pick up location and the same applies to the drop off location
								</Typography>
							</ListItemText>
						</ListItem>
					</List>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</div>;
};

export default Location;