import React, { useState, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartItem from '../CartItem';
import PayPalButton from '../PayPalButton';
import Smackbar from '../Smackbar';
import { makeStyles } from '@material-ui/core/styles';
import { CALCULATE_TOTAL } from '../../helpers';

const useStyles = makeStyles(() => ({
	icon: {
		textAlign: "right",
		width: "100%"
	}
}));

const Cart = ({ currentCart, setCurrentCart }) => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [responseStatus, setResponseStatus] = useState(0);

	const onClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, [setIsOpen, isOpen]);

	if (!currentCart.length) {
		return null;
	}
	return <div>
		<div className={classes.icon}>
			<IconButton onClick={onClick} edge={"end"}>
				<ShoppingCartIcon fontSize={"large"} />
			</IconButton>
		</div>
		<Smackbar responseStatus={responseStatus} />
		<Dialog open={isOpen} onClose={onClick} aria-labelledby="cart dialog" scroll={"paper"} maxWidth={"lg"}>
			<DialogTitle id="My Cart">My Cart</DialogTitle>
			<DialogContent dividers={true}>
				<List>
					{
						currentCart.map((item, index) => {
							return <ListItem key={`cartItem_${index}`}>
								<CartItem item={item} index={index} currentCart={currentCart} setCurrentCart={setCurrentCart} />
							</ListItem>;
						})
					}
				</List>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<Typography variant={"h5"}>
							Total:
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant={"h5"}>
							${CALCULATE_TOTAL(currentCart)}.00
						</Typography>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<PayPalButton currentCart={currentCart} setResponseStatus={setResponseStatus} />
				<Button onClick={onClick} color="secondary">
					Pay
				</Button>
				<Button onClick={onClick} color="secondary">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	</div>;
};

export default Cart;

