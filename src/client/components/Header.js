import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default (props) => {

    const auth = useSelector(state => state.auth);

    console.log(`Am I logged in ? `, auth);

    const authButton = auth ?
        <a href="/api/logout">Logout</a>
        :
        <a href="/api/auth/google">Login</a>;


    return (
        <header>
            <div>SSR Learn</div>
            <nav>
                <ul>
                    <li><Link to={'/users'}>Users</Link></li>
                    <li><Link to={'/admins'}>Admins</Link></li>
                    <li>{authButton}</li>
                </ul>
            </nav>
        </header>
    );
}