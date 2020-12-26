import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';

const LIST_INFO = [
	"If you are looking for patient, calm and experienced trainers, you've come to the right place ",
	"Our Trainers have had extensive background checks and are MVD certified ",
	"Lessons are enjoyable yet educational ",
	"We will help you develop skills necessary to be safe and confident behind the wheel of your car ",
	"We proudly started our driving school in Tucson, Arizona ",
	"The school is locally owned and operated in Pima County ",
	"Areas we serve are: Tucson, Vail, Green Valley, Sahuarita, Oro Valley, Marana and surrounding areas ",
	"Contracted and Certified in the State of Arizona ",
	"Authorized Third Party Trainer Provider ",
];

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	}
}));

const About = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Driving Lessons Safety and Responsibility </Typography>
		<ContentList listInfo={LIST_INFO} />
	</div>;
};

export default About;