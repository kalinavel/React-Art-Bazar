import React from 'react';
import Logo from '../logoipsum-logo-41.svg';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="container-header breadcrumb" aria-label="breadcrumbs">
          <figure>
              <a className="logo">
                  <img src={Logo} style={{ height: 100, width: 320 }} alt="logo"/>
              </a>
          </figure>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/catalog">Catalog</a></li>
              <li><a href="#">Cart</a></li>
          </ul>
      </nav>
    )
  }
}
