import React,  { useState, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import FormController from '../FormController';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	formNotVisible: {
		display: "none"
	}
}));

const REVIEW_INFO = [
	{
		date: "2019-02-03",
		name: "aileen mette",
		comment: "thank you shannaz for I feel the class was informative and I look forward to driving lesson.may I know your personal number I need to talk about the scheduling for my road test and im going to have my written exam on tuesday.-aileen mette"
	},
	{
		date: "2019-01-19",
		name: "luke",
		comment: "im looking for  a driver school for my wife, but her English is not very good and we are worried she will have trouble with the classroom part of it "
	},
	{
		date: "2018-12-18",
		name: "Lize Garcia",
		comment: "I had a very wonderful experience with Shenaz she made me so confident on the road and taught me so much, i strongly recommend learn 2 drive for anyone who was as scared as I was "
	},
	{
		date: "2018-11-28",
		name: "Rafia",
		comment: "Shehnaaz is an amazing driving instructor. It was my first time sitting in a driver's seat and I was a nervous wreck but Shehnaaz really helped me build my confidence about the road. I did 20 hours with her and every hour was educational and enjoyable.She is really great at explaining and demonstrating driving concepts. She is also very calm, patient and knowledgeable. Would definitely recommend to anyone looking for a good driving school. "
	},
	{
		date: "2018-01-06",
		name: "Alan",
		comment: "Shenaz was superb in getting my very nervous daughter calm, relaxed, focused and confident behind the wheel with the 10-hour driving program. She brought my daughter out of her comfort zone and developed a very capable driver. Thanks very much for your wonderful teaching techniques and mannerisms. Highly recommended to friends!"
	},
	{
		date: "2017-07-05",
		name: "Arjun",
		comment: "Shenaz is awesome.. It's just like your sister or mother teaching you... She is so calm, patient and soft spoken.. Her instructions were very clear. This was my first ever time in life handling a steering and she made it easy and simple. The guidance and confidance she gave me was so helpful.. Infact that confidence made me to buy my first ever new car and that too a luxury sports version (Range Rover ..lol.). I highly recommend Shenaz either you are a student , first time driver or elder..  I opted for her 10 hours driving classes.. at the end of 10th hour class , she just asked me to drive around for 15-20 minutes and asked me to show all those drive / parlking modes -- that's it my test is done. I was given a test pass certificate which I submitted in MVD the next morning and got my Driving Licence.. Hurray..  :) Thank you, Shenaz- now I am completely independent and free to drive across. Keep up the good work, your soft spoken nature and amazing teaching skills..."
	},
	{
		date: "2016-11-29",
		name: "taraiford@my.waketech.edu",
		comment: "I never though that I could let go of that fear I have for driving. Vickie B taught me things about driving that I never learn before. I'm 50 years of age and finally decided that its time for me to get my license, but with Vickie I know I will get them this time. I know that I need more practice but the fear is gone and the ease have sat in. Thanks Vickie !!!! I will recommend Vickie to anyone of age because she have patience (LOL) .."
	},
	{
		date: "2015-09-11",
		name: "Kim Nepo",
		comment: "So grateful that Vickie Bridges had taught my daughter Marissa how to successfully drive with lots of patience & knowledge of the rules of the road. It is a difficult thing to keep your cool while out on the road with a beginner teenage driver. Which is what brought us to Vickie. Vickie allowed Rissa to maintain calm & get back out on the road to pass her drivers test with no issues. Vickie has brought Rissa many different ways to the same location to teach her the beltline, back roads & different interstates incase one route is blocked or unavailable. She also has taught her to use an excellent phone app. in order to assist her to new places. We appreciate all of her kindness & going out of her way to help teach our daughter up & beyond what we expected. Vickie has been extremely helpful with all of Marissa & our families questions. She has been such a pleasure to meet! It is priceless to have your child safe & confident while out on the road. Her Sister will be scheduling just as soon as she is old enough to drive. I will tell everyone that finds themselves in the same predicament of being frustrated teaching driving to give Vickie a call. I could never thank her enough!"
	},
	{
		date: "2015-07-04",
		name: "Latysha",
		comment: "I highly endorse and recommend this driving school. I had my teen daughter go through a 6 hour behind-the-wheel instruction, and it was the best thing I did. It built up her confidence, lessoned her 'deathgrip' of the steering wheel and with her learning in Tucson vs Sierra Vista and dealing the the hustle an bustle of Tucson, she was looking forward to driving. She passed her driver's test on her first try. I am recommended Shehnaaz to my friends and if needbe, will have my other daughter take the behind the wheel instruction."
	}
];

const Reviews = () => {
	const classes = useStyles();
	const [isFormVisible, setIsFormVisible] = useState(false);
	const onClick = useCallback(() => {
		setIsFormVisible(!isFormVisible);
	}, [isFormVisible, setIsFormVisible]);
	return <div>
		<Typography variant={"h6"} className={classes.header}> {REVIEW_INFO.length} Comments </Typography>
		<Button variant="contained" onClick={onClick}>
			{isFormVisible ? "Cancel Comment" : "Leave a comment"}
		</Button>
		<div className={!isFormVisible ? classes.formNotVisible : ""}>
			<FormController formName={"Review"} />
		</div>
		<List className={classes.header}>
			{
				REVIEW_INFO.map((review, index) => {
					return <ListItem key={`info_${index}`} disableGutters={true}>
						<ListItemText>
							<Typography variant={"body1"}> {review.comment} </Typography>
							<Typography variant={"body2"}>
								{review.name} <Typography variant={"caption"}> {review.date}</Typography>
							</Typography>
						</ListItemText>
					</ListItem>
				})
			}
		</List>
	</div>;
};

export default Reviews;