import React from 'react';
import Logo from '../female-relax-japanese-svgrepo-com.svg';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-message">
          <img src={Logo} alt="female relaxing" />
          <p>404 Error. Keep calm and try again :).</p>
      </div>
    )
  }
}
