import React from 'react';

export default class CatalogItem extends React.Component {
  render() {
    return (
      <article className="box catalog-item">
        <div className="content">
          <figure>
            <img src="https://bulma.io/images/placeholders/480x320.png" alt="catalog item"/>
          </figure>
          <div className="text catalog-text">
            <h2>{this.props.data.title}</h2>
            <p>{this.props.data.description}</p>
          </div>
          <div className="catalog-price">
            <p>Price: </p>
            <p>$100</p>
          </div>
          <div className="catalog-btn">
            <button type="button">
              View more
            </button>
          </div>
        </div>
      </article>
    )
  }
}
