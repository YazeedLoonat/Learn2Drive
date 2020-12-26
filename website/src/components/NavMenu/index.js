import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import NavMenuItem from "../NavMenuItem";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	drawer: {
		height: props => `calc(100% - ${props.height}px)`,
		top: props => props.height
	}
}));

const NavMenu = ({
	nav,
	selected,
	menuOpen,
	onClose,
	height
}) => {
	const classes = useStyles({ height });
	return <Drawer
		variant={"persistent"}
		anchor="left"
		open={menuOpen}
		classes={{ paper: classes.drawer }}
	>
		<List disablePadding>
			{
				nav.map((elem, index) => {
					let itemSelected = false;
					if (elem.name === selected.name) {
						itemSelected = true;
					}
					return <NavMenuItem
						navInfo={elem}
						index={index}
						onClose={onClose}
						selected={itemSelected}
						key={`NavMenuItem_${index}`}
					/>;
				})
			}
		</List>
	</Drawer>;
};

export default NavMenu;
