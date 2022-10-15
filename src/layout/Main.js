import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {

    const navStyle = {
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
    }

    const linkStyle = {
        textDecoration: "none",
        marginLeft: "25px"
    }

    return (
        <div>
            <nav style={navStyle}>
                <ul>
                    <Link style={linkStyle} to="/socialMedia">Social Media</Link>
                    <Link style={linkStyle} to="/register">Registration</Link>
                    <Link style={linkStyle} to="/login">Login</Link>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;