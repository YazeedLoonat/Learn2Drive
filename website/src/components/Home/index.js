import React from 'react';
import Typography from '@material-ui/core/Typography';
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

const LIST_INFO = [
	"Affordable all-inclusive packages",
	"high quality driving institution",
	"Positive reinforcement",
	"Online registration",
	"You make your own driving schedule",
	"A possibility of lower insurance rates",
	"Class and drive times are conveniently scheduled to accommodate student needs",
	"Training Completion Certificate after passing our test waives the driving test at MVD",
];

const Home = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Welcome to Learn 2 Drive Driving School located in Tucson, Arizona </Typography>

		<Typography variant={"h6"} align={"left"} className={classes.subHeader}> What we offer: </Typography>
		<ContentList listInfo={LIST_INFO} />

		<Typography variant={"h6"} className={classes.subHeader}> Important Links: </Typography>
		<Typography variant={"h6"}>
			<a href="https://www.kold.com/story/27840079/approved-adot-driving-schools-to-issue-certificates-to-skip-license-exams/">
				Tucson News Now - Approved ADOT driving schools to issue certificates to skip license exams Arizona MVD Website
			</a>
		</Typography>
	</div>;
};

export default Home;