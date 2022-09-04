import React from 'react';

function HomeItem({data}) {

  return (
    <article className="box">
      <div className="content">
        <figure>
          <img src={data.image} alt="home item"/>
        </figure>
        <div className="text" style={{'justifyContent': 'center'}}>
          <h2>{data.title}</h2>
          <p style={{'textAlign': 'center'}}>{data.artist}</p>
        </div>
      </div>
    </article>
  )
}

export default HomeItem