import React from 'react';
import FilterBand from '../FilterBand/FilterBand';
import CatalogItem from '../CatalogItem/CatalogItem';
import CatalogItems from '../Data/CatalogItems.json';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../logoipsum-logo-41.svg';


export default class Catalog extends React.Component {
  render() {
    return (
      <>
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
          <SearchBar/>
        </nav>
  
        <FilterBand/>
        <div className="container-catalog is-flex-wrap-wrap">
          {CatalogItems.map((item) => <CatalogItem data={item} key={item.id} />)}
        </div>
      </>    
    )
  }
}
