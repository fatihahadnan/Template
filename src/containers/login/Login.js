import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Carousel, Card, Col, Row, Button, Modal, Divider, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoremIpsum from '../../components/LoremIpsum';
const { Header, Content } = Layout;

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
};

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
                    <Button className="login-form-button" type="primary" htmlType="submit">Log In</Button>
                </Form.Item>
                </Form>
                
                <Divider/>
                <p style={{ textAlign: 'center' }}>Don't have an account? <a>Sign Up</a></p>
            </Modal>

            <Carousel>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
            <LoremIpsum/>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                <LoremIpsum/>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                <LoremIpsum/>
            </Card>
        </Col>
        </Row>
        </div>
        </Content>
        </Layout>
    )
}

export default Login;