import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

const Nav = () => (
  <nav>
    <section className='container'>
      <aside>
        <Link to='/'>Khalil Liu</Link>
      </aside>
      <aside className='link-border'>
        <NavLink to='/' exact>Work</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact' className='btn'>Contact</NavLink>
      </aside>
    </section>
  </nav>
)


export default Nav;