import React from 'react';

import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';

import 'normalize.css';
import './app.sass';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <Main />
                    <Sidebar />
                </div>
            </div>
        )
    }
}

