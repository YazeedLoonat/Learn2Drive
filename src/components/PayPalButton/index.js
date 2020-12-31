import React, { useCallback } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { payPalClientID } from '../../secrets.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	payPalDiv: {
		maxWidth: "80px"
	},
	payPalButton: {
		height: 25
	}
}));

const PayPalButton = ({ currentCart, setResponseStatus }) => {
	const classes = useStyles();
	const createOrder = useCallback((data, actions) => {
		let total = 0;
		currentCart.forEach(item => {
			total += (item.cost * item.amount);
		})
		return actions.order.create({
			purchase_units: [{
				amount: {
					currency_code: "USD",
					value: `${total}.00`
				}
			}]
		});
	}, [currentCart]);

	const onApprove = useCallback(async (data, actions) => {
		setResponseStatus(1);
	}, [setResponseStatus]);

	const onError = useCallback((err) => {
		setResponseStatus(-1);
	}, [setResponseStatus]);

	return <PayPalScriptProvider options={{ "client-id": payPalClientID }}>
		<div className={classes.payPalDiv}>
			<PayPalButtons
				fundingSource={FUNDING.PAYPAL}
				createOrder={createOrder}
				onApprove={onApprove}
				onError={onError}
				className={classes.payPalButton}
			/>
		</div>
	</PayPalScriptProvider>;

};

export default PayPalButton;
