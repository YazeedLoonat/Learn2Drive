import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	grid: {
		marginTop: "2%",
		marginLeft: "15%",
		width: "70%"
	},
	subHeader: {
		marginTop: "2%",
	},
	media: {
		height: 140
	}
}));

const PACKAGES = [
	{
		media: "permit.jpg",
		title: "Permit",
		cost: 39
	},
	{
		media: "2Hour.jpg",
		title: "2 Hour",
		cost: 199
	},
	{
		media: "6Hour.jpg",
		title: "6 Hour",
		cost: 399
	},
	{
		media: "10Hour.jpg",
		title: "10 Hour",
		cost: 699
	}
];

const Packages = () => {
	const classes = useStyles();
	return <div>
			<Typography variant={"h5"} className={classes.header}> Our Class Packages </Typography>
			<div className={classes.grid}>
			<Grid container spacing={3}>
				{
					PACKAGES.map((packages, index) => {
						return <Grid item xs={4} key={`package_${index}`}>
							<Card>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image={`/${packages.media}`}
										title={`${packages.title} Package Image`}
									/>
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5">
										{packages.title} Package
									</Typography>
									<Typography variant="h6">
										${packages.cost}.00
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					})
				}
			</Grid>
		</div>
		<Typography variant={"h6"} className={classes.subHeader}>
			Select any of the driving packages above and the permit package is FREE
		</Typography>
	</div>;
};

export default Packages;