import {Content} from "antd/lib/layout/layout";
export const SectionWho = () => {
    return (
        <>
            <Content style={{ padding: '0 50px', textAlign:'left'}}>
                <div style={{height:'500px', padding: '24px'}} className="site-layout-content">
                    <div style={{display:'flex', justifyContent:'flex-end', height:'100%'}}>
                        <div style={{maxWidth:'50%', height:'100%', margin:'0', wordWrap: 'break-word', fontSize:'20px', padding:'0 20px 0 0'}}>
                            <h2 className="section-title" style={{textAlign:'left'}}>О нас</h2>
                            <p>Нам доверилось 10 человеков <br/>Мы сделали 30 тортиков</p>
                            <p style={{maxWidth:'100%'}}>оаооаоаоаоаоаоаооаоаоаоаоаоаооаоаоаоаоаооаоаоаоаоаооаоаоаоаоаоаоаоаоаооаоаоаоаоаоаоаоаоаоаоаооаоаоаоаооаоаооаооаоаоаоаоаооаоаоаоаооаоаоаоаоаоаооаоаоаоаооаоаоаооаоаоаоаооаоаоаоа</p>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}