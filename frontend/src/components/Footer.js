import React from 'react';
import { FiGithub } from 'react-icons/fi';

import './footer.css';

export default function Footer(){

  return (

    <footer>
      <div className="copyright">
        <p>2020 - Powered by Larissa Rodrigues</p>
      </div>
      <div className="social">
        <a href="https://github.com/larissarodr/wataqua">
          <FiGithub size={16} color="#fff"/>
          Contact me on GitHub!
        </a>
      </div>
    </footer>
  );
}
