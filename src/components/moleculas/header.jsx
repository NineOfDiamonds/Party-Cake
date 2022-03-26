import {Button, PageHeader} from 'antd';
export const Header = () => {
    return (
        <>
            <PageHeader
                className={'PageHeader'}
                title={"Party Cake"}
                subTitle={"Let the sweet begin!"}
                ghost={false}
                extra={[
                    <Button key="2">No</Button>,
                    <Button key="1" type="primary">да</Button>,
                ]}
            />

        </>

    )

}
