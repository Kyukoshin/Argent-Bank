import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../img/argentBankLogo.png';
import { signOut, setToken, loginSuccess } from '../redux/auth';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
      dispatch(loginSuccess());
    }
  }, []);

  return (
    <nav>
      {isAuthenticated ? (
        <div className="main-nav">
          <Link to="/"  className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Profile
            </Link>
            <Link  to="/" onClick={() => dispatch(signOut())}>
							<i className="fa fa-sign-out"></i>
							<span>Sign Out</span>
						</Link>
          </div>
        </div>
      ) : (
        <div className="main-nav">
          <Link to="/" className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}

    </nav>
  );
}

export default Header;
