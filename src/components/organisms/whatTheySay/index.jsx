import { Col, Row } from "antd";
import {Content} from "antd/lib/layout/layout";
export const SectionThey = () => {
    return (
        <>
            <Content style={{ padding: '0 50px', textAlign:'left'}}>
                <div style={{height:'500px', padding: '24px'}} className="site-layout-content">
                    <h2 className={'section-title'}>Отзывы и наши тортики</h2>

                    <Row>
                        <Col span={6} style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} className="cake-review"> {/* Вообще надо бы это сделать отдельным компонентом и в него передавать отзыв реального человека */}
                                <h3 style={{textAlign: 'left', fontSize:'25px', marginLeft:'5px'}}>Бомбеззно</h3>
                                <p style={{textAlign: 'right', fontSize:'18px', marginRight:'5px'}}>Александр</p>
                            </div>
                        </Col>
                        <Col span={6} style={{display: 'flex', justifyContent:'center'}}>
                            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} className="cake-review"> {/* Вообще надо бы это сделать отдельным компонентом и в него передавать отзыв реального человека */}
                                <h3 style={{textAlign: 'left', fontSize:'25px', marginLeft:'5px'}}>Виртуозно</h3>
                                <p style={{textAlign: 'right', fontSize:'18px', marginRight:'5px'}}>Алина</p>
                            </div>
                        </Col>
                        <Col span={6} style={{display: 'flex', justifyContent:'center'}}>
                            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} className="cake-review"> {/* Вообще надо бы это сделать отдельным компонентом и в него передавать отзыв реального человека */}
                                <h3 style={{textAlign: 'left', fontSize:'25px', marginLeft:'5px'}}>Тяф</h3>
                                <p style={{textAlign: 'right', fontSize:'18px', marginRight:'5px'}}>Bark-Dog</p>
                            </div>
                        </Col>
                        <Col span={6} style={{display: 'flex', justifyContent:'center'}}>
                            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} className="cake-review"> {/* Вообще надо бы это сделать отдельным компонентом и в него передавать отзыв реального человека */}
                                <h3 style={{textAlign: 'left', fontSize:'25px', marginLeft:'5px'}}>Вкусно</h3>
                                <p style={{textAlign: 'right', fontSize:'18px', marginRight:'5px'}}>Мешлен</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    )
    }