import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import Logo from '../logoipsum-logo-41.svg';
import React from 'react';

export default class Branding extends React.Component {
    render() {
        return (
            <>
                <div className="container-branding">
                    <div className="branding-box">
                        <h3>Branding stuff</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sit dicta architecto laborum quasi fuga, maiores amet. </p>
                    </div>
                    <div className="branding-box">
                        <figure>
                            <a className="logo">
                                <img src={Logo} alt="logo"/>
                            </a>
                        </figure>
                    </div>
                    <div className="branding-box social-container">
                        <span>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}