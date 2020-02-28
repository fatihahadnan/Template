import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Modal, Divider, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import CarouselLogin from './components/CarouselLogin';
import CardLogin from './components/CardLogin';
const { Header, Content } = Layout;

const Login = () => {

    const [visible, setVisible] = useState(false);    

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <Layout>

            <Header className="header">
                <h1 className="logo">HELLO</h1>
                <Menu mode="horizontal" theme="dark" style={{ float: 'right', lineHeight: '80px'}}>
                    <Button onClick={showModal} type="primary">
                        Login
                    </Button>
                </Menu>
            </Header>

            <Content className="content">
                <Modal
                visible={visible}
                //   onOk={this.handleOk}
                //   confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}>
                    <Form
                        className="login-form"
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Link to="./home">
                            <Button className="login-form-button" type="primary" htmlType="submit">Log In</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                    <Divider/>
                    <p style={{ textAlign: 'center' }}>Don't have an account? <a>Sign Up</a></p>
                </Modal>
            
                <CarouselLogin/>
                <CardLogin/>
            </Content>
        </Layout>
    )
}

export default Login;