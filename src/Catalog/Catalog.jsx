import React, { useState, useEffect } from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import { Link } from 'react-router-dom';
import ViewMoreDetailsButton from '../ViewMoreDetailsButton/ViewMoreDetailsButton';


function Catalog(props) {

  const [itemsCatalog, setItems] = useState([]);
  const [search, setNewSearch] = useState("");

  const searchByTitle = (e) => {
    setNewSearch(e.target.value);
  };

  const searched = !search
    ? itemsCatalog
    : itemsCatalog.filter((picture) =>
        picture.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:3000/tiles")
    .then((res) => res.json())
    .then((data) => setItems(data));
  },[]);
  
  return (
    <>
      <nav className="container-header breadcrumb" aria-label="breadcrumbs">
        <a className="logo">
          <p>ArtBazaaar</p>
        </a>
        <ul>
          <Link to='/' >Home</Link>
          <Link to='/catalog' >Catalog</Link>
          <Link to='#' >Cart</Link>
        </ul>

        <div className="searchbar">
          <input
           className="input is-rounded is-medium" 
           type="text" 
           placeholder="Search"
           value={search}
           onChange={searchByTitle} />
        </div>
      </nav>
      
      <div className="container-catalog is-flex-wrap-wrap">
        {searched.map((item) => 
        <CatalogItem data={item} key={item.id} >
          <Link to='/catalog/{key}'>
            <ViewMoreDetailsButton />
          </Link>
        </CatalogItem> )}
      </div>
    </>    
  )
}

export default Catalog;









  