import {Button, Card, Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import Image from "next/image";
import {Content} from "antd/lib/layout/layout";

export const SectionWhat = () => {
    return (
        <>
            <Content style={{ padding: '0 50px'}}>
                <div style={{height:'100vh', padding: '24px'}} className="site-layout-content">
                    <h2 className={'section-title'}>Что мы умеем?</h2>
                    <Row>
                        <Col span={8} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <a href={'/'} >
                                <div className={'shadow ability-card'}>

                                    <div className={'ability-img'}>
                                        <img style={{height: '90%', width:'90%'}} alt={''} src={"/static/images/1day2.png"}/>
                                    </div>
                                    <h2 style={{textAlign:'center'}}>Тортик за 1 день</h2>
                                </div>
                            </a>
                        </Col>
                        <Col span={8} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <a href={'/'} >
                                <div className={'shadow ability-card'}>

                                    <div className={'ability-img'}>
                                        <img style={{height: '90%', width:'90%'}} alt={''} src={"/static/images/choose2.png"}/>
                                    </div>
                                    <h2 style={{textAlign:'center'}}>Выбери готовый</h2>
                                </div>
                            </a>
                        </Col>
                        <Col span={8} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <a href={'/'} >
                                <div className={'shadow ability-card'}>

                                    <div className={'ability-img'}>
                                        <img style={{height: '90%', width:'90%'}} alt={''} src={"/static/images/ownCake.png"}/>
                                    </div>
                                    <h2 style={{textAlign:'center'}}>Создай свой</h2>
                                </div>
                            </a>
                        </Col>
                    </Row>

                </div>
            </Content>
        </>
    )
}