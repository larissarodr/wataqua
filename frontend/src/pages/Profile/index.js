import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import './styles.css';

export default function Profile(){
    const history = useHistory();

    const fullname = localStorage.getItem('fullname');
    const username = localStorage.getItem('username');

    const hashInfo = btoa(username);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: hashInfo,
            }
        })
    }, [hashInfo]);


    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="WatAqua"/>
                <span>Welcome, {fullname}</span>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

        </div>
    );
}