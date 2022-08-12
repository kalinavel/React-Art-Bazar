import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <nav className="container-header breadcrumb" aria-label="breadcrumbs">
        <a className="logo">
          <p>ArtBazaaar</p>
        </a>
        <ul>
          <Link to='/' >Home</Link>
          <Link to='/catalog' >Catalog</Link>
          <Link to='#' >Cart</Link>
        </ul>
    </nav>
  )
}

export default Header