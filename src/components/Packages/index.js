import React, { useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Cart from '../Cart';
import PackageModal from '../PackageModal';
import cloneDeep from 'lodash/cloneDeep';
import { PACKAGES } from '../../consts';

const useStyles = makeStyles(() => ({
	header: {
		marginTop: "2%"
	},
	grid: {
		marginTop: "2%"
	},
	media: {
		height: 140
	}
}));

const Packages = () => {
	const classes = useStyles();
	const [currentCart, setCurrentCart] = useState([]);
	const [packageModal, setPackageModal] = useState("");
	const openPackageModal = (packageName) => () => {
		setPackageModal(packageName)
	};

	const addToCart = useCallback((name) => {
		const index = currentCart.findIndex((elem) => elem.name === name);
		const temp = cloneDeep(currentCart);
		if (index >= 0) {
			temp[index].amount++;
			setCurrentCart(temp);
		} else {
			const item = PACKAGES.find((elem) => elem.name === name);
			temp.push({
				...item,
				amount: 1
			});
			setCurrentCart(temp);
		}
	}, [currentCart, setCurrentCart]);

	return <div>
		<Cart currentCart={currentCart} setCurrentCart={setCurrentCart} />
		<PackageModal info={packageModal} setInfo={setPackageModal} addToCart={addToCart} />
		<Typography variant={"h5"} className={classes.header}> Our Class Packages </Typography>
		<div className={classes.grid}>
			<Grid container spacing={3}>
				{
					PACKAGES.map((packages, index) => {
						return <Grid item xs={6} key={`package_${index}`}>
							<Card>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image={`/${packages.media}`}
										title={`${packages.title} Package Image`}
										onClick={openPackageModal(packages.name)}
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
		<Typography variant={"h6"} className={classes.header}>
			Select any of the driving packages above and the permit package is FREE
		</Typography>
	</div>;
};

export default Packages;