import React, { useState }from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.png';

import Footer from '../../components/Footer';
import api from '../../services/api';

export default function NewUser(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [initials, setInitials] = useState('');
  const [state, setState] = useState('');
  const [user_type_id, setUser_type_id] = useState('');
  const history = useHistory();

  async function handleNewUser(e){
    e.preventDefault();

    try{
      const response = await api.get('user_type/0');
      setUser_type_id(response.data[0].id);
    } catch (err) {
      alert('Error finding appropriate user type.');
      return;
    }

    setState(true);

    try{
        await api.post('user', { 
          username,
          password,
          email,
          fullname,
          initials,
          state,
          user_type_id
        });
        
        history.push('/');
    } catch (err) {
        alert('Error creating user. Try again.');
        return;
    }
    alert('User successfully created!');
}

    return (
        <>
            <div className="register-container">
                <div className="content">
                  <section>
                      <img src={logoImg} alt="WatAqua"/>
                      <h1>Registration</h1>
                      <p>Create your account and sign in.</p>
                      <p>Initials must be unique within your organization.</p>

                      <Link className="back-link" to="/">
                          <FiArrowLeft size={16} color="#003673"/>
                          Login
                      </Link>

                  </section>
                    <form onSubmit={handleNewUser}>
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

                      <input 
                          placeholder="Email"
                          value={email}
                          onChange={e=> setEmail(e.target.value)}
                      />

                      <div className="input-group">
                        <input 
                            placeholder="Full Name"
                            value={fullname}
                            onChange={e=> setFullname(e.target.value)}
                            />

                        <input 
                            placeholder="Initials"
                            style={{ width: 115 }}
                            value={initials}
                            onChange={e=> setInitials(e.target.value)}
                            />
                      </div>

                      <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}