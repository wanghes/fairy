"use strict";
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Link} from 'react-router';

export default class Demo extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/404">404</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
                <p>Home Page</p>
            </div>
        );
    }
};
