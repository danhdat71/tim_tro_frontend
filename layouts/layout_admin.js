import React from 'react';
import cl from './layout_admin.module.css';
import Head from 'next/head';
import logo from '@/assets/imgs/logo.png';
import Header from '@/components/admin/header/header';
import Sidebar from '@/components/admin/sidebar/sidebar';
import Footer from '@/components/admin/footer/footer';
import ContentHeader from '@/components/admin/content-header/content-header';

const LayoutAdmin = (props) => {
    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            </Head>
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <Header></Header>
                    <Sidebar></Sidebar>
                    <div class="content-wrapper">
                        <ContentHeader></ContentHeader>
                        <div className='content'>
                            <div class="container-fluid">{props.children}</div>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;
