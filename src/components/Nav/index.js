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
import { makeStyles } from '@material-ui/core/styles';
import { NAVITEMS, IMAGE_HEIGHT } from '../../consts';

const useStyles = makeStyles(() => ({
	container: {
		backgroundColor: "#293E6A"
	}
}));

const findNav = (path) => {
	if (path === "/") {
		return NAVITEMS[0];
	}

	const navItem = NAVITEMS.find(item => item.name === path);
	if (!navItem) {
		return {};
	}
	return navItem;
};

const Nav = () => {
	const classes = useStyles();
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
	return <div>
		<AppBar position="static" className={classes.container}>
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">
					{window.innerWidth >= 1218 ? currentNav.label : ""}
				</Typography>
				<Header />
			</Toolbar>
		</AppBar>
		<NavMenu
			nav={NAVITEMS}
			selected={currentNav}
			menuOpen={menuOpen}
			onClose={handleMenuClose}
			height={IMAGE_HEIGHT || 0}
		/>
	</div>;
};

export default Nav;