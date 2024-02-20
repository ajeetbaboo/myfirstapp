import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

    
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.navMode} bg-${props.navMode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="">{props.name}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link> */}
                <a className="nav-link active" aria-current="page" href="">{props.homeText}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">{props.aboutUs}</a>
            </li>
            
            </ul>
            <div className={`form-check form-switch text-${props.navMode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.navMode==='light'?'Change Dark Mode':'Change Light Mode'}</label>
            </div>
        </div>
        </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    name:PropTypes.string,
    homeText: PropTypes.string,
    aboutUs : PropTypes.string
}

Navbar.defaultProps={
    name:"TextUtils",
    homeText: "About",
}