import {Header} from "../src/components/moleculas/Header";
import {Content, Footer} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title"
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Example</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <Content style={{margin:'60px 0 40px', textAlign: 'center'}}>
                <Title type={'success'}>Найдите крутой торт или создайте его сами!</Title>
                <Footer>

                </Footer>
            </Content>
        </>
    )
}
