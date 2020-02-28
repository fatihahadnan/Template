import React from 'react';
import { Card, Col, Row } from 'antd';
import LoremIpsum from '../../../components/LoremIpsum';


const CardLogin = () => {

    return (    
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
    )
}

export default CardLogin;