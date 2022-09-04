import React from 'react';
import ViewMoreDetailsButton from '../ViewMoreDetailsButton/ViewMoreDetailsButton';
import { Link } from 'react-router-dom';

function CatalogItem({data}) {
  
  return (
    <article className="box catalog-item">
      <div className="content">
        <figure>
          <img src={data.image} alt="catalog item"/>
        </figure>
        <div className="text catalog-text">
          <h2>{data.title}</h2>
          <div>
            <p>Artist: {data.artist}</p>
            <p>Medium: {data.medium}</p>
          </div>
        </div>
        <div className="catalog-price">
          <p>Price: </p>
          <p>{data.price}</p>
        </div>
        <Link to={`/catalog/${data.id}`}>
          <ViewMoreDetailsButton />
        </Link>
      </div>
    </article>
  )
}

export default CatalogItem