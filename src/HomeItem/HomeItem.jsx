import React from 'react'

export default class HomeItem extends React.Component {
    render() {
        return (
          <article className="box">
            <div className="content">
              <figure>
                <img src="https://bulma.io/images/placeholders/480x320.png"/>
              </figure>
              <div className="text">
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.description}</p>
              </div>
            </div>
          </article>
        )
    }
}
