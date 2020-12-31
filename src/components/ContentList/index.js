import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	list: {
		marginTop: props => props.dense ? "" : "2%"
	}
}));

const ContentList = ({ listInfo, dense = false }) => {
	const classes = useStyles({ dense });
	return <List className={classes.list}>
		{
			listInfo.map((info, index) => {
				return <ListItem key={`info_${index}`} disableGutters={true}>
					<ListItemText> <Typography> { info } </Typography> </ListItemText>
				</ListItem>
			})
		}
	</List>;
};

export default ContentList;