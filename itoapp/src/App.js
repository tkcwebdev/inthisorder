import React from 'react';
import './App.css';
import HeaderNav from './marketing/components/navigation/HeaderNav/HeaderNav';

import AdminPage from './admin/views/AdminDashboard'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import MarketingMain from './marketing/components/MarketingMain'


export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <MarketingMain />
        <Route path="/admin" exact component={AdminPage} />
      </div>
    </Router>
  );
}
