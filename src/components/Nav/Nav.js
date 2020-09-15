import React from 'react';
import { withRouter } from 'react-router-dom';
import './Nav.css';
const Nav = ({history, match}) => {
    return(
        <nav>
            <ul>
            <li onClick={() => history.push(`${match.url}crowd-funding-demo/`) } >home</li>
            <li onClick={() => history.push(`${match.url}crowd-funding-demo/about`) } >about</li>
            <li onClick={() => history.push(`${match.url}crowd-funding-demo/contact`) } >contact</li>
            <li onClick={() => history.push(`${match.url}crowd-funding-demo/info`) } >info</li>
            </ul>
        </nav>
    )
}

export default withRouter(Nav);