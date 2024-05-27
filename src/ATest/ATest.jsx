
import React, { useState } from 'react';
import axios from './axios';
import { v4 as uuidv4 } from 'uuid';
import csrf_Token from './axios';


// Set the default Axios headers to include the CSRF token

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error messages

        try {
            const response = await axios.post('login', {
              email,
              password,
          });

            const { token } = response.data;
            localStorage.setItem('token', token);
            alert('Login successful');
            // Redirect or perform any other actions upon successful login
        } catch (error) {
            console.error('There was an error logging in!', error);
            setError('Login failed. Please check your email and password.');
        }
    };

    const handd = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error messages

        try {
            await axios.post('logout', {
            });

       
            alert('Logout successful');
            // Redirect or perform any other actions upon successful login
        } catch (error) {
            console.error('There was an error logging in!', error);
            setError('Login failed. Please check your email and password.');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>

            <input type="hidden" name="_token" value="CidoFta9vpm1z2GrWMnxGkeUZuDiNJgXPQkF2H1X"></input>
            

                <div>
                    <label>Email </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {email}
                </div>
                <div>
                
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <button onClick={handd}>Logout</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;