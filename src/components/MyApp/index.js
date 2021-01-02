import React, { useState, useEffect } from 'react';
import '../../App.css';
import Nav from '../Nav';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import Reviews from '../Reviews';
import Classes from '../Classes';
import Packages from '../Packages';
import Location from '../Location';
import Register from '../Register';
import Payment from '../Payment';
import ContactUs from '../ContactUs';
import NotFound from '../NotFound';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	container: {
		marginTop: "2%",
		marginBottom: "2%",
		width: props => props.windowWidth > 1200 ? "70%" : "90%",
		marginLeft: props => props.windowWidth > 1200 ? "15%": "5%",
		marginRight: props => props.windowWidth > 1200 ? "15%": "5%"
	}
}));

const MyApp = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		return _ => {
			window.removeEventListener('resize', handleResize);
		}
	});
	const classes = useStyles({ windowWidth });

	return <div className="App">
		<Nav windowWidth={windowWidth} />
		<main>
			<div className={classes.container}>
				<Switch>
					<Route path={"/home"}>
						<Home />
					</Route>
					<Route path={"/about"}>
						<About />
					</Route>
					<Route path={"/reviews"}>
						<Reviews />
					</Route>
					<Route path={"/classes"}>
						<Classes />
					</Route>
					<Route path={"/packages"}>
						<Packages />
					</Route>
					<Route path={"/location"}>
						<Location />
					</Route>
					<Route path={"/register"}>
						<Register />
					</Route>
					<Route path={"/payment"}>
						<Payment />
					</Route>
					<Route path={"/contactUs"}>
						<ContactUs />
					</Route>
					<Route path={"/"} exact>
						<Home />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</main>
		<Footer />
	</div>
};

export default MyApp;