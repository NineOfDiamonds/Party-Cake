import {Header} from "../src/components/moleculas/Header";
import {Content, Footer} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title"

export default function Home() {
    return (
        <>
            <Header/>
            <Content style={{margin:'60px 0 40px', textAlign: 'center'}}>
                <Title type={'success'}>Найдите крутой торт или создайте его сами!</Title>
                <Footer>

                </Footer>
            </Content>
        </>
    )
}
