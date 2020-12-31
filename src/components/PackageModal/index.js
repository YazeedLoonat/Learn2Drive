import React, { useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { PACKAGES } from '../../consts';
import { Typography } from '@material-ui/core';

const PackageModal = ({ info, setInfo, addToCart }) => {
	const onClick = useCallback(() => {
		setInfo("");
	}, [setInfo]);

	const onAdd = useCallback(() => {
		addToCart(info);
		setInfo("");
	}, [addToCart, info, setInfo]);

	let itemInfo = {};
	if (!!info) {
		itemInfo = PACKAGES.find(elem => elem.name === info);
	}

	return <Dialog open={!!info} onClose={onClick} aria-labelledby="cart dialog" scroll={"paper"} maxWidth={"lg"}>
		<DialogTitle id={itemInfo.title}>{itemInfo.title} (${itemInfo.cost}.00)</DialogTitle>
		<DialogContent dividers={true}>
			<List>
				{
					itemInfo.listInfo ? itemInfo.listInfo.map((text, index) => {
						return <ListItem key={`cartItem_${index}`}>
							<Typography> {text} </Typography>
						</ListItem>;
					}) : []
				}
			</List>
		</DialogContent>
		<DialogActions>
			<Button onClick={onAdd} color="primary">
				Add to Cart
			</Button>
			<Button onClick={onClick} color="secondary">
				Close
			</Button>
		</DialogActions>
	</Dialog>
};

export default PackageModal;