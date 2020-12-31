import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { googleKey } from '../../secrets.js';
const useStyles = makeStyles(() => ({
	map: {
		height: "400px",
		width: "100%"
	}
}));

const GMap = () => {
	const classes = useStyles();
	useEffect(() => {
		const continueScript = () => {
			const center = { lat: 32.2733329 , lng: -110.981586 };
			const map = new window.google.maps.Map(document.getElementById("map"), { zoom: 16, center });
			new window.google.maps.Marker({ position: center, map: map });
		};
		if (!window.google) {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap&libraries=&v=weekly`;
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);
			s.addEventListener('load', e => {
				continueScript();
			})
		} else {
			continueScript();
		}
	}, []);
	return <Fragment>
		<div id="map" className={classes.map}></div>
	</Fragment>;
};

export default GMap;