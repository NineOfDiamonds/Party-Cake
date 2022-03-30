import {Button, PageHeader} from 'antd';
export const Header = () => {
    return (
        <>
            <header style={{padding:'0 23px', display:'flex', width: '100%', backgroundColor:'#fffcf1', overflow: 'hidden', position: 'fixed', top: '0', left: '0', zIndex: '999', justifyContent:'space-between', alignItems:'center', height:'56px', textDecoration:'none'}}>
                <div style={{ width:'20%', display:'flex', justifyContent:'center'}}>
                    <a href="/" className={'header-link'}>Party Cake</a>
                </div>

                <div style={{ width:'25%', display:'flex', justifyContent:'space-between'}}>
                    <a href="/" className={'header-link'}>📞+5813213455</a>
                    <Button shape={'round'} className={'cake-btn'}>Корзина</Button>
                </div>
            </header>

        </>

    )

}
