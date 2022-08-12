import React from 'react';
import ViewMoreDetailsButton from '../ViewMoreDetailsButton/ViewMoreDetailsButton';
import { Link } from 'react-router-dom';

class CatalogItem extends React.Component {
  
  render() {
    return (
      <article className="box catalog-item">
        <div className="content">
          <figure>
            <img src={this.props.data.image} alt="catalog item"/>
          </figure>
          <div className="text catalog-text">
            <h2>{this.props.data.title}</h2>
            <div>
              <p>Artist: {this.props.data.artist}</p>
              <p>Medium: {this.props.data.medium}</p>
            </div>
          </div>
          <div className="catalog-price">
            <p>Price: </p>
            <p>{this.props.data.price}</p>
          </div>
          <Link to={`/catalog/${this.props.data.id}`}>
            <ViewMoreDetailsButton />
          </Link>
        </div>
      </article>
    )
  }
}

export default CatalogItem