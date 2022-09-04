import React from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';
import Header from '../Header/Header';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import CatalogItems from '../Data/CatalogItems.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ItemDetails() {

    const {itemId} = useParams();
    const itemData = CatalogItems.find(catalogItem => catalogItem.id == itemId);
    const itemTitle = itemData.title;
    const itemArtist = itemData.artist;
    const itemMedium = itemData.medium;
    const itemPrice = itemData.price;
    const itemImage = itemData.image;
    
    return (
        <>
            <Header />
            <div className="container-item">
                <div className="item-image">
                    <figure>
                        <img src={itemImage} />
                    </figure>
                </div>
                <div className="item-description">
                    <h1>{itemTitle}</h1>
                    <p>{itemArtist}</p>
                    <p>{itemMedium}</p>
                </div>
            </div>
            <div className="container-shopping">
                <h2>Price: {itemPrice}</h2>
                <div className="buttons-shopping">
                    <Link to='/catalog'>
                        <GoBackButton/>
                    </Link>
                    <AddToCartButton/>
                </div>
            </div>
        </>
    );
}


