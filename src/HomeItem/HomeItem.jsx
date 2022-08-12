import React from 'react';

class HomeItem extends React.Component {

  render() {
    return (
      <article className="box">
        <div className="content">
          <figure>
            <img src={this.props.data.image} alt="home item"/>
          </figure>
          <div className="text" style={{'justifyContent': 'center'}}>
            <h2>{this.props.data.title}</h2>
            <p style={{'textAlign': 'center'}}>{this.props.data.artist}</p>
          </div>
        </div>
      </article>
    ) 
  }
}

export default HomeItem