
import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import cloneDeep from 'lodash/cloneDeep';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	itemImage: {
		maxWidth: "100%"
	}
}));

const updateAmount = (currentCart, index, change) => {
	const temp = cloneDeep(currentCart);
	temp[index].amount = change < 0 ? 0 : change;
	return temp;
};

const CartItem = ({ item, index, currentCart, setCurrentCart }) => {
	const classes = useStyles();
	const clearCartItem = useCallback(() => {
		setCurrentCart(updateAmount(currentCart, index, 0));
	}, [setCurrentCart, currentCart, index]);

	const setCartItem = useCallback((event) => {
		setCurrentCart(updateAmount(currentCart, index, event.target.value));
	}, [setCurrentCart, currentCart, index]);
	return <Grid container spacing={3}>
		<Grid item xs={3}>
			<img
				src={item.media}
				alt={`${item.title}`}
				className={classes.itemImage}
			/>
		</Grid>
		<Grid item xs={6}>
			<Typography variant={"h5"}>
				{item.title} Package
			</Typography>
			<Typography variant={"h6"}>
				${item.cost}.00
			</Typography>
			<TextField
				type={"number"}
				label={"Amount"}
				value={item.amount}
				onChange={setCartItem}
			/>
		</Grid>
		<Grid item xs={2}>
			<Typography variant={"h5"}>
				${item.cost * item.amount}.00
			</Typography>
		</Grid>
		<Grid item xs={1}>
			<IconButton onClick={clearCartItem}>
				<ClearIcon />
			</IconButton>
		</Grid>
	</Grid>
};

export default CartItem;