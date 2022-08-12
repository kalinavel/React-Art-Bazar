import React, { useState, useEffect } from 'react';
// import FilterBand from '../FilterBand/FilterBand';
// import ApplyButton from '../ApplyButton/ApplyButton';
import CatalogItem from '../CatalogItem/CatalogItem';
import { Link } from 'react-router-dom';
import ViewMoreDetailsButton from '../ViewMoreDetailsButton/ViewMoreDetailsButton';


function Catalog(props) {

  const [itemsCatalog, setItems] = useState([]);
  const [search, setNewSearch] = useState("");
  // const [selectedArtist, setSelectedArtist] = useState("");

  const searchByTitle = (e) => {
    setNewSearch(e.target.value);
  };

  const searched = !search
    ? itemsCatalog
    : itemsCatalog.filter((picture) =>
        picture.title.toLowerCase().includes(search.toLowerCase())
  );

  // const filterByArtist = (filteredData) => {
  //   if (!selectedArtist) {
  //     return filteredData;
  //   }

  //   const filteredItems = filteredData.filter(
  //     (item) => item.artist.split(" ").indexOf(selectedArtist) !== -1
  //   );
  //   return filteredItems;
  // };

  // const handleArtistChange = (e) => {
  //   setSelectedArtist(e.target.value);
  // };

  useEffect(() => {
    fetch("http://localhost:3000/tiles")
    .then((res) => res.json())
    .then((data) => setItems(data));

    // const filteredData = filterByArtist(itemsCatalog)
    // setItems(filteredData);
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
           {/* <label>Search */}
             <input
              className="input is-rounded input is-medium" 
              type="text" 
              placeholder="Search"
              value={search}
              onChange={searchByTitle} />
              
           {/* </label> */}
        </div>
      </nav>
      
      {/* <select 
        className="filter" 
        id="artist-input" 
        value={selectedArtist} 
        onClick={handleArtistChange}>
        <option value="">All</option>
        <option value="Paul Sandby">Paul Sandby</option>
        <option value="John Warwick Smith">John Warwick Smith</option>
      </select> */}

      {/* <div className="container-applybtn">
        <ApplyButton/>
      </div> */}
      
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









  