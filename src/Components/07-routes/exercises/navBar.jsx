'use strict';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (


        <>
            <Link to="/" className="btn btn-danger">Home</Link>
            {/* <Link to="/about" className="btn btn-outline-success">About</Link> */}

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    About
            </DropdownToggle>
                <DropdownMenu>
                    <Link to="/about" className="btn btn-outline-success">
                        <DropdownItem>About QA Cinemas</DropdownItem>
                    </Link>
                    <Link to="/contact" className="btn btn-outline-success">
                        <DropdownItem>Contact Us</DropdownItem>
                    </Link>
                    <DropdownItem>Location</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Link to="/films" className="btn btn-outline-success">Films</Link>
            <Link to="/bookings" className="btn btn-outline-success">Bookings</Link>
        </>
        // </Dropdown>
    )
}
export default NavBar;