"use client";

import cl from './toggle-header.module.css';
import Link from 'next/link';
import ProviderMenuItems from '../provider-menu-items/provider-menu-items';
import FinderMenuItems from '../finder-menu-items/finder-menu-items';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import { toggleMenuHeader } from '@/redux/features/header';

const ToggleHeader = () => {

    const dispatch = useDispatch();
    const header = useAppSelector(function(state){
        return state.headerReducer.header;
    });

    function handleEnableHeader() {
        return header.is_enable == true
            ? `${cl.toggle_header} ${cl.enable_header}`
            : `${cl.toggle_header}`;
    }

    function handleSetEnableHeader(status) {
        dispatch(toggleMenuHeader(status));
    }

    return (
        <div
            className={handleEnableHeader()}
        >
            <div
                className={cl.backdrop}
                onClick={()=>{
                    handleSetEnableHeader(false);
                }}
            ></div>
            <div className={cl.wrap_main_header}>
                <div className={cl.header_head}>
                    <div
                        className={cl.close_menu_btn}
                        onClick={()=>{
                            handleSetEnableHeader(false);
                        }}
                    >
                        <i className="fal fa-times"></i>
                    </div>
                    <div className={cl.person}>
                        <div className={cl.person_avatar}>
                            <img loading='lazy' src='https://cafebiz.cafebizcdn.vn/162123310254002176/2023/10/25/z4813277701687-510933581a70b464516d3e146ac34edc-4735-1698218519720-16982185198431013731516.jpg' alt='avatar'></img>
                        </div>
                        <div className={cl.little_info}>
                            <div className={cl.name}>Nguyễn Thị Xuân</div>
                            <div className={cl.person_link}>
                                <span>
                                    <span className={cl.person_domain}>timtro.com</span>
                                    /nguyen_thi_xuan_0122
                                </span>
                                <span className={cl.copy_clip}><i className="far fa-copy"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.header_main}>
                    {/* <ProviderMenuItems></ProviderMenuItems> */}
                    <FinderMenuItems></FinderMenuItems>
                </div>
            </div>
        </div>
    );
}

export default ToggleHeader;
