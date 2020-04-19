import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';
import logoImg from '../assets/logo-white-2.png';

import './header.css';

export default function Header(){

  const history = useHistory();

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return (
    <header>
      <nav className="stroke">
        <Link to="/profile"><img src={logoImg} alt="WatAqua"/></Link>
        <ul>
          <li><Link to="/stocks">Stock</Link></li>
          <li><Link to="/experiments">Experiments</Link></li>
          <li><Link to="/tanks">Tanks</Link></li>
          <li><Link to="/userSettings">User Settings</Link></li>
        </ul>
        <button onClick={handleLogout} type="button">
          <FiLogOut size={18} color="#003673"/>
          Logout
        </button>
      </nav>
  </header>
  );
}