import React, { Fragment, useContext, useState, useEffect } from 'react';
import UIkit from 'uikit';
import { Link, NavLink } from 'react-router-dom';
import AdminNavigation from '../AdminNavigation';
import ChildNavigation from '../ChildNavigation';
import logoIcon from '../../assets/ito_logo_notag@2x.png';
import './HeaderNav.scss';

import { UserContext } from '../../providers/UserProvider';
import { ChildContext } from '../../providers/ChildProvider';

const HeaderNav = ({ mobileNav }) => {
	const { user } = useContext(UserContext);
	const { child } = useContext(ChildContext);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			// Set window width/height to state
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const closeOffCanvas = () => {
		// e.preventDefault();
		if (windowWidth < 650) {
			console.log(`Small window: ${windowWidth}`);
			UIkit.offcanvas('#mobile-nav').hide();
		}
		console.log('Hello');
	};

	return (
		<div className="HeaderNav">
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-5@s uk-width-2-3 uk-text-right">
						<div className="HeaderLogo">
							<div className="logo-wrapper">
								<Link to="/">
									<img src={logoIcon} alt="InThisOrder" />
								</Link>
							</div>
						</div>
					</div>
					<div className="uk-width-4-5@s uk-width-1-3 uk-text-right">
						<div className="desktop-headernav">
							<nav>
								<ul>
									{child.loggedInStatus ? (
										<ChildNavigation
											closeOffCanvas={closeOffCanvas}
										/>
									) : user.loggedInStatus ? (
										<AdminNavigation
											closeOffCanvas={closeOffCanvas}
										/>
									) : (
										(!user.loggedInStatus ||
											!child.loggedInStatus) && (
											<>
												<li>
													<NavLink
														onClick={closeOffCanvas}
														exact
														to="/"
													>
														Home
													</NavLink>
												</li>
												<li>
													<NavLink
														onClick={closeOffCanvas}
														exact
														to="/how-it-works"
													>
														How It Works
													</NavLink>
												</li>
												<li>
													<NavLink
														onClick={closeOffCanvas}
														exact
														to="/feedback"
													>
														Feedback
													</NavLink>
												</li>
												<li>
													<NavLink
														onClick={closeOffCanvas}
														exact
														to="/login"
													>
														Parent Login
													</NavLink>
												</li>
												<li>
													<NavLink
														onClick={closeOffCanvas}
														to="/child-login"
													>
														Child Login
													</NavLink>
												</li>
												<li>
													<NavLink
														onClick={closeOffCanvas}
														className="cta-pill"
														to="/create-account"
													>
														Get Started
													</NavLink>
												</li>
											</>
										)
									)}
								</ul>
							</nav>
						</div>
						{user.loggedInStatus ? (
							<NavLink
								className="cta-pill tablet-started"
								to="/admin/dashboard"
							>
								Dashboard
							</NavLink>
						) : child.loggedInStatus ? (
							<NavLink
								className="cta-pill tablet-started"
								to="/child/dashboard"
							>
								Dashboard
							</NavLink>
						) : (
							<NavLink
								className="cta-pill tablet-started"
								to="/create-account"
							>
								Get Started
							</NavLink>
						)}
						<button
							type="button"
							className="nav-button"
							uk-toggle="target: #mobile-nav"
						>
							<span uk-icon="icon: menu; ratio: 2" />
						</button>
						<div
							id="mobile-nav"
							uk-offcanvas="flip: true; overlay: true; mode: reveal;"
						>
							<div className="uk-offcanvas-bar">
								<button
									type="button"
									className="uk-offcanvas-close"
									uk-close="true"
								/>
								<nav>
									<ul>
										{child.loggedInStatus ? (
											<ChildNavigation
												closeOffCanvas={mobileNav}
											/>
										) : user.loggedInStatus ? (
											<AdminNavigation
												closeOffCanvas={mobileNav}
											/>
										) : (
											(!user.loggedInStatus ||
												!child.loggedInStatus) && (
												<>
													<li>
														<NavLink
															onClick={
																closeOffCanvas
															}
															exact
															to="/"
														>
															Home
														</NavLink>
													</li>
													<li>
														<NavLink
															onClick={
																closeOffCanvas
															}
															exact
															to="/how-it-works"
														>
															How It Works
														</NavLink>
													</li>
													<li>
														<NavLink
															onClick={
																closeOffCanvas
															}
															exact
															to="/feedback"
														>
															Feedback
														</NavLink>
													</li>
													<li>
														<NavLink
															onClick={
																closeOffCanvas
															}
															exact
															to="/login"
														>
															Parent Login
														</NavLink>
													</li>
													<li>
														<NavLink
															onClick={
																closeOffCanvas
															}
															to="/child-login"
														>
															Child Login
														</NavLink>
													</li>
													<li>
														<NavLink
															onClick={
																closeOffCanvas
															}
															className="cta-pill"
															to="/create-account"
														>
															Get Started
														</NavLink>
													</li>
												</>
											)
										)}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderNav;