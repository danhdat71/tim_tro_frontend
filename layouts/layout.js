import Header from '@/components/header/header';
import Head from 'next/head';
import cl from './layout.module.css';
import Footer from '@/components/footer/footer';

const Layout = (props) => {

    function head()
    {
        return (
            <Head>
                {/* Google font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
                {/* Fontawesome 5 */}
                <link
                    href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
        );
    }

    return (
        <div className={cl.container}>
            <div className={cl.main_container}>
                <div className={cl.padding_container}>
                    {head()}
                    <Header></Header>
                    <main>
                        {props.children}
                    </main>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Layout;
