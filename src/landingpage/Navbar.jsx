import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg sticky-top" style={{ height: "12vh", backgroundColor: "#FFD447", zIndex: 1000}}>
            <div className="container-fluid">
                <div className='logo mt-4'>
                    <Link className="navbar-brand"  href="#">
                        <img 
                            src='/media/images/logo.png' 
                            style={{ 
                                width: "17vw", 
                                height: "28vh", 
                                filter: "brightness() contrast(1.1)" ,// Adjust brightness and contrast
                                 
                            }} 
                            alt="Logo" 
                        />
                    </Link>
                </div>
                
                <div className='navcomp'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-30px">
                            <li className="nav-item px-2">
                                <Link className="nav-link active" style={{ fontSize: '1.3rem' }} aria-current="page" to="/FlatHome">Flat</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link active" style={{ fontSize: '1.3rem' }} aria-current="page" to="/PgHome">Pg</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link active" style={{ fontSize: '1.3rem' }} aria-current="page" to="/SignupHome" >Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;