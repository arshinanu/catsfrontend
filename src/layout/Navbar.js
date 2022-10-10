import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className={"container"}>
                <a className="navbar-brand" href="#" >Cats Stock Market</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                    </div>
                    <Link className={"btn btn-outline-light"} to={"/addcompany"}> Add Company</Link>
            </div> 
            
            </nav>
        </div>
    );
};

export default Navbar;