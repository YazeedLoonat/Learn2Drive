import React from 'react';
import Box from '@material-ui/core/Box';

const Header = () => {
	return <Box
		style={{
			position: "sticky",
			left: "35%",
			display: "flex"
		}}
	>
		<img
			src={"/logo.gif"}
			alt={"Learn 2 Drive Logo"}
		/>
	</Box>;
};

export default Header;