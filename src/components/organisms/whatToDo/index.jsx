import {Content} from "antd/lib/layout/layout";
import {Col, Row} from "antd";

export const SectionDo = () => {
    return (
        <>
            <Content style={{ padding: '0 50px'}}>
                <div style={{height:'100vh', padding: '24px'}} className="site-layout-content">
                    <h2 className={'section-title'}>Четыре быстрых шага</h2>

                    <Row style={{width:'100%', display: 'flex',justifyContent:'center', flexDirection:'row', marginTop:'60px'}}>

                        <div className={'step-body'} style={{fontSize:'24px', maxWidth:'25%'}}>
                            <div className={'step-number'}><p style={{margin:'0', fontSize:'25px'}}>1</p></div>
                            <p style={{margin:'0'}}>Выберите одну из 10 начинок</p>
                            <a href="/" style={{color: '#ae7875', textDecoration:'underline'}}>Начать</a>
                        </div>
                        
                        
                        <div className={'step-body'} style={{fontSize:'24px', maxWidth:'25%'}}>
                            <div className={'step-number'}><p style={{margin:'0', fontSize:'25px'}}>2</p></div>
                            <p>Загрузите картинку, или выберите готовый дизайн</p>
                        </div>
                        
                    </Row>
                    <Row style={{width:'100%', display: 'flex', justifyContent:'center', flexDirection:'row'}}>
                        
                        <div className={'step-body'} style={{fontSize:'24px', maxWidth:'25%'}}>
                            <div className={'step-number'}><p style={{margin:'0', fontSize:'25px'}}>3</p></div>
                            <p>Наблюдайте за статусом и сроками</p>
                        </div>
                    
                        
                        <div className={'step-body'} style={{fontSize:'24px', maxWidth:'25%'}}>
                            <div className={'step-number'}><p style={{margin:'0', fontSize:'25px'}}>4</p></div>
                            <p style={{color:'#9d4045'}}>Удивите близких классным подарком</p>
                        </div>
                        

                    </Row>
                </div>
            </Content>
        </>

    )
}