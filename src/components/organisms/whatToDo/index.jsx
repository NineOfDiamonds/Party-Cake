import {Content} from "antd/lib/layout/layout";
import {Col, Row} from "antd";

export const SectionDo = () => {
    return (
        <>
            <Content style={{ padding: '0 50px'}}>
                <div style={{height:'100vh', padding: '24px'}} className="site-layout-content">
                    <h2 className={'section-title'}>Четыре простых шага</h2>
                    <Row>
                        <Col span={12}>
                            <div className={'step-body'}>
                                <div className={'step-number'}><p style={{margin:'0', fontSize:'17px'}}>1</p></div>
                                <p style={{fontSize:'20px'}}>Выберите одну из 10 начинок</p>
                                <a href="/">Start</a>
                            </div>
                            <div className={'step-body'}>
                                <div className={'step-number'}><p style={{margin:'0', fontSize:'17px'}}>3</p></div>
                                <p style={{fontSize:'20px'}}>Наблюдайте за статусом и сроками</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className={'step-body'}>
                                <div className={'step-number'}><p style={{margin:'0', fontSize:'17px'}}>2</p></div>
                                <p style={{fontSize:'20px'}}>Загрузите картинку, или выберите готовый дизайн</p>
                            </div>
                            <div className={'step-body'}>
                                <div className={'step-number'}><p style={{margin:'0', fontSize:'17px'}}>4</p></div>
                                <p style={{fontSize:'20px'}}>Удивите близких классным подарком</p>
                            </div>
                        </Col>


                    </Row>
                </div>
            </Content>
        </>

    )
}