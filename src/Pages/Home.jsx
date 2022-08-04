// import React, { useState, useEffect } from 'react';
import React from 'react';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import HomeItem from '../HomeItem/HomeItem';
import '../App.css';
import axios from 'axios';

// const Home = () => {
//   const [items, setItems] = useState([]);
//   const [visible, setVisible] = useState(3);

//   const showMoreTiles = () => {
//     setVisible((prevValue) => prevValue + 3);
//   };

//   useEffect(() => {
//     fetch("http://localhost:3000/tiles")
//     .then((res) => res.json())
//     .then((data) => setItems(data));
//   }, []);
  
//     return (
//       <>  
//         <Header/>
//         <Intro/>

//         <div className="container-tiles is-flex-wrap-wrap">
//           {items
//           .slice(0, visible)
//           .map((item) => <HomeItem data={item} key={item.id} />)}
//           <div className="buttons">
//           <button className="button is-link is-success is-medium is-hovered" onClick={showMoreTiles}>
//               View more
//           </button>
//         </div>
//         </div>
//       </>
//     )
// }

// export default Home;

export default class Home extends React.Component {
  
  state = {
    items: [],
    visible: 3,
    isLoading: false,
    errorMsg: ''
  };

  componentDidMount() {
    // const { visible } = this.state;
    this.setState({ isLoading: true });
    axios
      .get('http://localhost:3000/tiles')
      .then((response) => {
         this.setState({ items: response.data, errorMsg: '' });
      })
      .catch((error) =>
        this.setState({
          errorMsg: 'Error while loading data. Try again later.'
        })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  showMoreTiles = () => {
    this.setState((prevState) => ({
      visible: prevState.visible + 3
    }));
  };

  render() {
    const { items, isLoading, errorMsg } = this.state;
    
    return (
      <>
        <Header />
        <Intro />
        {isLoading && <p className="loading">Loading...</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="container-tiles is-flex-wrap-wrap">
           {items
            .slice(0, this.state.visible)
            .map((item) => <HomeItem data={item} key={item.id} />)}
            <div className="buttons">
            <button className="button is-link is-success is-medium is-hovered" onClick={this.showMoreTiles}>
              {isLoading ? 'Loading...' : 'View More'}
            </button>
          </div>
          </div>
      </>
    );
  }
}
  

