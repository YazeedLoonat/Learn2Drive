import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
	}
}));

const Header = () => {
	const classes = useStyles();
	return <Box className={classes.container}>
		<img
			src={"/logo.gif"}
			alt={"Learn 2 Drive Logo"}
		/>
	</Box>;
};

export default Header;