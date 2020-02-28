import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderHome = () => {
    return (
        <Header className="header">
            <h1 className="logo">HELLO</h1>
                <Menu mode="horizontal" theme="dark" style={{ float: 'right', lineHeight: '80px'}}>
                    <Menu.Item key="recipe" style={{ fontSize: '16px' }}>
                        <Link to="/"/>
                        Log Out
                    </Menu.Item>
                </Menu>
        </Header>
    )
} 

export default HeaderHome;