import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { username, password });
            console.log(response.data);
            localStorage.setItem('fullname', response.data.fullname);
            localStorage.setItem('username', response.data.username);
            history.push('profile');
        } catch (err) {
            alert('Error. Try again.')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="WatAqua"/>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input 
                        placeholder="Username"
                        value={username}
                        onChange={e=> setUsername(e.target.value)}
                    />

                    <input 
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}