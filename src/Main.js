import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App'
import Cart from './Cart'
import Search from './Search'
import './main.scss';

function Users() {
    return <h2>Users</h2>;
  }
  
  function AppRouter() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="clearfix">
              <li>
                <Link to="/">Budget</Link>
              </li>
              <li>
                <Link to="/cart/">Cart</Link>
              </li>
              <li>
                <Link to="/search/">Search</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={App} />
          <Route path="/cart/" component={Cart} />
          <Route path="/search/" component={Search} />
        </div>
      </Router>
    );
  }
  
  export default AppRouter;