import {Button, Card, Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import Image from "next/image";
import {Content} from "antd/lib/layout/layout";

export const SectionWhat = () => {
    return (
        <>
            <Content style={{ padding: '0 50px'}}>
                <div style={{height:'100vh', padding: '24px'}} className="site-layout-content">
                    <Row>
                        <Col span={8} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <a href={'/'} >
                                <Card style={{width:'200', transition: '.2s linear'}} className={'shadow'}>
                                    <h2>Торт за 1 день</h2>
                                </Card>
                            </a>
                        </Col>
                        <Col span={8} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <a href={'/'} >
                                <Card style={{width:'200', transition: '.2s linear'}} className={'shadow'}>
                                    <h2>Торт за 1 день</h2>
                                </Card>
                            </a>
                        </Col>
                        <Col span={8} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <a href={'/'} >
                                <Card style={{width:'200', transition: '.2s linear'}} className={'shadow'}>
                                    <h2>Торт за 1 день</h2>
                                </Card>
                            </a>
                        </Col>
                    </Row>

                </div>
            </Content>
        </>
    )
}