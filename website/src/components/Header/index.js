import React from 'react';
import Box from '@material-ui/core/Box';

const Header = () => {
	return <Box
		style={{
			display: "flex",
			justifyContent: "center",
			width: "100%",
		}}
	>
		<img
			src={"/logo.gif"}
			alt={"Learn 2 Drive Logo"}
		/>
	</Box>;
};

export default Header;