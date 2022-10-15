import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/socialMedia">Social Media</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;