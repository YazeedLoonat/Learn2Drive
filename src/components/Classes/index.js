import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ContentList from '../ContentList';
import {
	CLASSES_LIST_INFO_1,
	CLASSES_LIST_INFO_2,
	CLASSES_LIST_INFO_3,
 } from '../../consts';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	}
}));

const Classes = () => {
	const classes = useStyles();
	return <div>
		<Typography variant={"h5"} className={classes.header}> Driver Education Program </Typography>

		<Grid container spacing={3} className={classes.header}>
			<Grid item xs={6}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Learners Permit Class </Typography>
						<ContentList listInfo={CLASSES_LIST_INFO_1} key={`ConentList_${1}`} dense={true} />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Behind the Wheel </Typography>
						<ContentList listInfo={CLASSES_LIST_INFO_2} key={`ConentList_${2}`} dense={true} />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card>
					<CardContent>
						<Typography variant={"h6"} align={"left"}> Recommended Package Includes: </Typography>
						<ContentList listInfo={CLASSES_LIST_INFO_3} key={`ConentList_${3}`} dense={true} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>

	</div>;
};

export default Classes;
