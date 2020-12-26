/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from "../Header";
import NavMenu from "../NavMenu";

const NAVITEMS = [
	{
		name: "/home",
		label: "Home"
	},
	{
		name: "/about",
		label: "About"
	},
	{
		name: "/reviews",
		label: "Reviews"
	},
	{
		name: "/classes",
		label: "Classes"
	},
	{
		name: "/packages",
		label: "Packages"
	},
	{
		name: "/location",
		label: "Location"
	},
	{
		name: "/register",
		label: "Register"
	},
	{
		name: "/payment",
		label: "Payment"
	},
	{
		name: "/contactUs",
		label: "Contact Us"
	}
];

const IMAGE_HEIGHT = 120;

const findNav = (path) => {
	if (path === "/") {
		return NAVITEMS[0];
	} else {
		return NAVITEMS.find(item => item.name === path);
	}
};

const Nav = () => {
	const history = useHistory();
	const [currentNav, setCurrentNav] = useState(findNav(window.location.pathname));
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenu = useCallback(() => {
		setMenuOpen(!menuOpen);
	});
	const handleMenuClose = useCallback((index = -1) => {
		if (index > -1) {
			setCurrentNav(NAVITEMS[index]);
			history.push(NAVITEMS[index].name);
		}
		if (window.innerWidth < 1218) {
			setMenuOpen(false);
		}
	});
	return <AppBar position="static" style={{ backgroundColor: "#293E6A" }}>
		<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
				<MenuIcon />
			</IconButton>
			<NavMenu
				nav={NAVITEMS}
				selected={currentNav}
				menuOpen={menuOpen}
				onClose={handleMenuClose}
				height={IMAGE_HEIGHT || 0}
			/>
			<Typography variant="h6" >
				{window.innerWidth >= 1218 ? currentNav.label : ""}
			</Typography>
			<Header />
		</Toolbar>
	</AppBar>;
};

export default Nav;