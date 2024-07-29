import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const login = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login request data:', { username, password, email });
  
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/login', {
        auth: {
          username: username,
          password: password,
          email: email,
        },
      });
  
      if (response.status === 200) {
        // Handle successful login
        // For example, store the token in local storage and navigate to another page
        localStorage.setItem('token', response.data.token);
        history('/dashboard');
      }
    } catch (error) {
      alert('oops!! We are very sorry,Something unusual happend during Login')
      console.error('Login failed:', error.response?.data?.message || 'An error occurred during login');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full p-6 space-y-8 bg-zinc-100 shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Login</h2>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              value={email}
              onChange={(e) =>setemail(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <button onClick={handleLogin}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center text-gray-600">
          <p>Don't have an account? 
            <Link to="/signup" className="text-indigo-600 hover:underline"> Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

 export default login;


  
  
 