import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import { Menu, Button } from 'antd';

function Header() {


    function handleResponse(response) {
        console.log(response);
    }

    return (
        <header className="MainHeader">
            <div className="logo"></div>
            <nav className="gnb">
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/"><a>Home</a></Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about"><a>About</a></Link>
                    </Menu.Item>

                    <Menu.Item key="problems">
                        <Link to="/problems"><a>Problems</a></Link>
                    </Menu.Item>
                </Menu>
            </nav>

            <Button type="primary" className="login">
                <Link to="/login"><a>Login</a></Link>
            </Button>
            



        </header>
    );
        
    

}


export default Header;