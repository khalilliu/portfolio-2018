import React, {Component} from 'react';
import{Link} from 'react-router-dom'

import {networks} from '../utils/client';

const Footer = () => (
  <footer>
    <section className='container'>
      <aside>
        <Link to='/'>© {new Date().getFullYear()}   Khalil Liu, A Maker.
        </Link>
      </aside>
      <aside className='link-border'>
        {Object.keys(networks).map((network,i) =>(
          <Link  
            to={networks[network]} 
            target='_blank'
            key={i}
          >
            {network}
          </Link>
        ) )}
      </aside>
    </section>
  </footer>
)


export default Footer;