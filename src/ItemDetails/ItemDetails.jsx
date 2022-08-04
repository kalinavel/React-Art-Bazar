import React from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';
import Header from '../Header/Header';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export default class Item extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <div className="container-item">
                    <figure>
                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                    </figure>
                    <div className="item-description">
                        <h1>Some awesome title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem maxime, iusto doloremque nihil asperiores! Nihil laudantium recusandae officiis, vitae illo harum rem veritatis dolorem, amet libero, enim sint corrupti!</p>
                    </div>
                </div>
                <div className="container-shopping">
                    <h2>Price:$45.00</h2>
                    <div className="buttons-shopping">
                        <GoBackButton/>
                        <AddToCartButton/>
                    </div>
                </div>
            </>
        )
    }
}
