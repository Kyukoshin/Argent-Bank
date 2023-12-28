import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess,setUserInfos } from '../redux/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('rememberedUsername');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedRememberMe && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: username,
        password: password,
      });
    
      if (response.data.status === 200) {
        dispatch(loginSuccess());
    
        const profileResponse = await axios.post(
          'http://localhost:3001/api/v1/user/profile',
          {},
          { headers: { Authorization: `Bearer ${response.data.body.token}` } }
        );
    
        if (profileResponse.data.status === 200) {
          dispatch(
            setUserInfos({
              firstName: profileResponse.data.body.firstName,
              lastName: profileResponse.data.body.lastName,
            })
          );
        } else {
          // Handle profile fetch error
          console.error('Error fetching user profile:', profileResponse.data.message);
        }
    
        if (rememberMe) {
          localStorage.setItem('rememberedUsername', username);
          localStorage.setItem('rememberedPassword', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberedUsername');
          localStorage.removeItem('rememberedPassword');
          localStorage.removeItem('rememberMe');
        }
    
        // Redirect to the profile page
        const redirectPath = '/';
        navigate(redirectPath);
      } else {
        // Handle login error
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      // Handle generic error
      console.error('An error occurred:', error.message);
      alert('Utilisateur ou mot de passe invalide');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const redirectPath = '/';
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
