import React, { FC } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className='container'>
                <Link className="navbar-brand " to="/">To do list</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
