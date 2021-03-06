import React from "react";
import { Switch, Route } from "react-router-dom";
import "./MarketingMain.scss";

// Pages in App to Route to
import Home from "../homePage/HomePage.container";
import HowItWorks from "../howItWorksPage/HowItWorksPage";
import Feedback from "../feedbackPage/FeedbackPage";
import Contact from "../contactPage/ContactPage.container";
import Terms from "../termsConditionsPage/TermsConditionsPage";
import Privacy from "../privacyPolicyPage/PrivacyPolicyPage";
import About from "../aboutPage/AboutPage.container";
import Login from "../loginPage/LoginPage.container";
import CreateAccount from "../createAccountPage/CreateAccountPage.container";
import ChildLogin from '../childLogin/ChildLogin.container';
import FeedbackThankYou from "../feedbackThankYou/FeedbackThankYou";

export default function MarketingMainContainer() {
  return (
    <div className="MarketingMainContainer">
      <div className="Main">
        {/* Router WIndow */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/feedback-thanks">
            <FeedbackThankYou />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/child-login">
            <ChildLogin />
          </Route>
          <Route path="/create-account">
            <CreateAccount />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
