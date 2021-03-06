import {Header} from "../src/components/moleculas/Header";
import {Content, Footer} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title"
import Head from 'next/head'
import {Breadcrumb, Layout} from "antd";
import {SectionHero} from "../src/components/organisms/hero";
import {SectionWhat} from "../src/components/organisms/whatWeCan";
import {SectionDo} from "../src/components/organisms/whatToDo";
import {SectionWho} from "../src/components/organisms/whoWeAre";
import { SectionThey } from "../src/components/organisms/whatTheySay";

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
            <SectionHero/>
            <SectionWhat/>
            <SectionDo/>
            <SectionWho/>
            <SectionThey/>

        </>
    )
}

// модалка быстрого заказа
// страница конструктора
// сам конструктор
// страница заказа за день
