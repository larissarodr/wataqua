import React, { useEffect } from 'react';

import api from '../../services/api';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Profile(){
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

    return (
        <>
            <Header/>
                <h1>Welcome, {fullname}</h1>
            <Footer/>
        </>
    );
}