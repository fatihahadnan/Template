import React, { useState } from 'react';
import HeaderHome from './components/HeaderHome';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const Home = () => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    };


    return (
        <Layout>
            
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
         
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ paddingTop: '76px' }}>
                    <Menu.Item key="1" >
                        <PieChartOutlined />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu key="sub1"
                            title={
                                <span>
                                <UserOutlined />
                                <span>User</span>
                                </span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2"
                            title={
                                <span>
                                <TeamOutlined />
                                <span>Team</span>
                                </span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

        <Layout>
            <HeaderHome/>
            <Content className="content"/>
        </Layout>
            
        </Layout>
    )
}

export default Home;