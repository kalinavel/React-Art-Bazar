import React, { useState, useEffect } from 'react';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import HomeItem from '../HomeItem/HomeItem';
import '../App.css';

function Home(props) {
  const [itemsHome, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreTiles = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    fetch("http://localhost:3000/tiles")
    .then((res) => res.json())
    .then((data) => setItems(data));
  }, []);
  
    return (
      <>  
        <Header/>
        <Intro/>

        <div className="container-tiles is-flex-wrap-wrap">
          {itemsHome
          .slice(0, visible)
          .map((item) => <HomeItem data={item} key={item.id} />)}
          <div className="buttons">
          <button className="button is-link is-success is-medium is-hovered" onClick={showMoreTiles}>
            View more
          </button>
        </div>
        </div>
      </>
    )
}

export default Home;


  

