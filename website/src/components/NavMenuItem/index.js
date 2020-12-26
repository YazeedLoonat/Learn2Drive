import React, { useCallback } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ClassIcon from '@material-ui/icons/Class';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const iconMap = {
	home: <HomeIcon />,
	about: <InfoIcon />,
	reviews: <RateReviewIcon />,
	classes: <ClassIcon />,
	packages: <ReceiptIcon />,
	location: <LocationOnIcon />,
	register: <AssignmentIcon />,
	payment: <PaymentIcon />,
	contactUs: <ContactSupportIcon />,
};

const NavMenuItem = ({
	navInfo,
	index,
	onClose,
	selected
}) => {
	const onClick = useCallback(() => {
		onClose(index);
	}, [index, onClose]);

	return <ListItem
		button
		onClick={onClick}
		style={{ backgroundColor: selected ? "#293E6A" : "inherit", color: selected ? "white" : "inherit"}}
	>
		<ListItemIcon style={{ color: selected ? "white" : "inherit"}}> {iconMap[navInfo.name]} </ListItemIcon>
		<ListItemText primary={navInfo.label} />
	</ListItem>;
};

export default NavMenuItem;
