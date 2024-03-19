import React, { memo } from 'react';
import cl from './breadcrumb.module.css';
import Link from 'next/link';

const Breadcrumb = (props) => {

    function renderItems() {
        if (props.items == null) {
            return (
                <Link href='/' className={cl.breadcrumb_item}>
                    <span>Trang chủ</span>
                </Link>
            );
        }
        return props.items.map(function(val, index) {
            return (
                <Link href={val.href} className={cl.breadcrumb_item} key={index}>
                    <span>{val.label}</span>
                    {props.items.length != index + 1 ? <span>/</span> : ''}
                </Link>
            );
        });
    }

    return (
        <div className={cl.breadcrumb}>
            {renderItems()}
        </div>
    );
}

export default memo(Breadcrumb);
