import {Header} from "../src/components/moleculas/Header";
import {Content, Footer} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title"
import Head from 'next/head'
import {Breadcrumb, Layout} from "antd";
import {SectionHero} from "../src/components/organisms/hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Party Cake</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Милана Телец, Варвара Дева, Фёдор Лев" />
                <meta name="copyright" lang="ru" content="ИП Party Cake" />
            </Head>
            <Header/>
            {/*<Content style={{margin:'60px 0 40px', minHeight:280, textAlign:'center'}}>*/}
            {/*    <div style={height:100%} >*/}
            {/*        <Title type={'success'}>Найдите крутой торт или создайте его сами!</Title>*/}
            {/*    </div>*/}
            {/*    <Footer>*/}

            {/*    </Footer>*/}
            {/*</Content>*/}
            <SectionHero/>
            <SectionHero/>

        </>
    )
}

// модалка быстрого заказа
// страница конструктора
// сам конструктор
// страница заказа за день
