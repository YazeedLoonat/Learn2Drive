import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';
import { ABOUT_LIST_INFO } from '../../consts';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	}
}));

const About = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Driving Lessons Safety and Responsibility </Typography>
		<ContentList listInfo={ABOUT_LIST_INFO} />
	</div>;
};

export default About;