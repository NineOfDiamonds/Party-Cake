import {Content} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {Button, Col, Row,} from "antd";
import Image from 'next/image'
import { CakeForOneDay } from "../../modals/CakeForOneDay";


export const SectionHero = () => {
    return (
        <>
            <Content style={{ padding: '56px 50px 0 50px'}}>
                <div style={{height:'calc(100vh - 56px)', padding: '24px',textAlign:'left'}} className="site-layout-content hero">
                    <Row>
                        <Col span={12}>
                            <Title style={{color: '#000', marginBottom:0}}>Сладкое и незабываемое?</Title> <Title style={{color: '#000', marginTop:0}}>Соберите свой торт за несколько минут!</Title>
                            <Button shape='round' size='large' className={'cake-btn'}>Перейти</Button>
                            <CakeForOneDay/>
                        </Col>
                        <Col span={12}>
                            <div style={{position:'absolute',right:'0', bottom:'0' , width: '50%', height: '50%'}}>
                                <Image src={'/static/images/PartyCake.png'} width={'589px'} height={'538px'} />
                            </div>

                        </Col>
                    </Row>

                </div>
            </Content>
        </>

    )

}

//сделать фоновый цвет
//Добавить кнопку в левую часть
//Добавить телефон в Хедере
//Коричневый треугольник бефором
//кружочки паттерном (взять из фигмы)

