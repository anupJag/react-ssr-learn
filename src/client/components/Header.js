import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default (props) => {

    const auth = useSelector(state => state.auth);

    //console.log(`Am I logged in ? `, auth);

    const authButton = auth ?
        <a href="/api/logout">Logout</a>
        :
        <a href="/api/auth/google">Login</a>;


    return (
        <header>
            <nav className="nav-wrapper deep-purple lighten-2">
                <Link to="/" className="brand-logo">SSR Learn</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/admins'>Admins</Link></li>
                    <li>{authButton}</li>
                </ul>
            </nav>
        </header>
    );
}