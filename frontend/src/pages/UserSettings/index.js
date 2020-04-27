import React, { useState, useEffect }from 'react';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function UserSettings(){

    const [user_types, setUser_types] = useState([]);
    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        api.get('user_type').then(response => {
          setUser_types(response.data);
        })
        api.get('permissions').then(response => {
            setPermissions(response.data);
          })
    }, []);

    return (
        <>
            <Header/>
            <div className="usersettings-container">
                <h1>User Settings</h1>
                <div className="usertypes-container">
                    <h2>User Types</h2>
                    <ul>
                        {user_types.map(user_type => (
                        <li key={user_type.id}>
                            <p>{user_type.id} - {user_type.description}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="permissions-container">
                    <h2>Permissions by User Type</h2>
                    <ul>
                        {permissions.map(permission => (
                        <li key={permission.id}>
                            {permission.allow === 0 && 
                                <p>{permission.id} - User Type {permission.user_type_id} is NOT allowed to access {permission.description}</p>}
                            {permission.allow === 1 && 
                            <p>{permission.id} - User Type {permission.user_type_id} is allowed to access {permission.description}</p>}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}