import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	subHeader: {
		marginTop: "2%",
		marginLeft: "15%"
	}
}));

const LIST_INFO_1 = [
	"This class is to help prepare you to take the permit test at MVD",
	"The curriculum focuses on giving you a complete understanding of the rules and regulations needed to get your learner's permit",
	"Upon completion of this class an insurance certificate will be issued"
];

const LIST_INFO_2 = [
	"This course will reinforce good driving habits, build confidence, and develop skills and understanding to make you a safe driver",
	"Upon completion of this course an insurance certificate will be issued"
];

const LIST_INFO_3 = [
	"5 hours of classroom instruction covering traffic laws and regulations and the principles of defensive driving",
	"10 hours of behind the wheel training (five 2 hour sessions)",
	"Insurance certificate which may qualify you for a discount on your insurance and a Training Completion Certificate (after successfully passing our test) that waives the test at MVD",
];

const Classes = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Driver Education Program </Typography>

		<Grid container spacing={3} className={classes.subHeader}>
			<Grid item xs={4}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Learners Permit Class </Typography>
						<ContentList listInfo={LIST_INFO_1} key={`ConentList_${1}`} dense={true} />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Behind the Wheel </Typography>
						<ContentList listInfo={LIST_INFO_2} key={`ConentList_${2}`} dense={true} />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={8}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Recommended Package Includes: </Typography>
						<ContentList listInfo={LIST_INFO_3} key={`ConentList_${3}`} dense={true} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>

	</div>;
};

export default Classes;
