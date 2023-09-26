import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div class="layout">
      <nav class="navbar">
        <div class="navbar-inner">
          <Link to="/" class="navbar-logo">Piano</Link>
          <ul class="navbar-nav">
            <li class="navbar-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
