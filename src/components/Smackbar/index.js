import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Smackbar = ({ responseStatus }) => {
	let severity = "info";
	let severityMessage = "";

	if (responseStatus > 0) {
		severity = "success";
		severityMessage = "Payment was successful";
	} else {
		severity = "error";
		severityMessage = "Payment was NOT successful. Please try again, or reach out to us if the problem persists";
	}

	return <Snackbar open={responseStatus !== 0} autoHideDuration={6000}>
		<Alert severity={severity}> {severityMessage} </Alert>
	</Snackbar>;
};

export default Smackbar;