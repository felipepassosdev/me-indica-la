import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-danger shadow">
                <h3 className="text-center text-light">Me indica lá</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/frontend" className="nav-link text-dark"><h5>Front-end</h5></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/backend" className="nav-link text-dark"><h5>Back-end</h5></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/mobile" className="nav-link text-dark"><h5>Mobile</h5></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;