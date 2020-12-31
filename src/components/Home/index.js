import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';
import { HOME_LIST_INFO } from '../../consts';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	}
}));

const Home = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Welcome to Learn 2 Drive Driving School located in Tucson, Arizona </Typography>

		<Typography variant={"h6"} className={classes.header}> What we offer: </Typography>
		<ContentList listInfo={HOME_LIST_INFO} />

		<Typography variant={"h6"} className={classes.header}> Important Links: </Typography>
		<Typography variant={"h6"}>
			<a href="https://www.kold.com/story/27840079/approved-adot-driving-schools-to-issue-certificates-to-skip-license-exams/">
				Tucson News Now - Approved ADOT driving schools to issue certificates to skip license exams Arizona MVD Website
			</a>
		</Typography>
	</div>;
};

export default Home;