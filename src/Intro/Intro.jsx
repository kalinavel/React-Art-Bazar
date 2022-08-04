import React from 'react';

export default class Intro extends React.Component {
  render() {
    return (
      <div className="container-intro">
          <figure>
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
          <div className="intro-text">
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem maxime, iusto doloremque nihil asperiores! Nihil laudantium recusandae officiis, vitae illo harum rem veritatis dolorem, amet libero, enim sint corrupti!</p>
          </div>
      </div>
    )
  }
}
