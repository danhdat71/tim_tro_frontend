import Link from 'next/link';
import React, { memo } from 'react';

const CountItemDboard = (props) => {

    let {
        count = 0,
        text = '',
        icon = '',
        background = 'bg-info',
        link = '/admin'
    } = props;

    return (
        <div className={`small-box ${background}`}>
            <div className="inner">
                <h3>{count}</h3>
                <p>{text}</p>
            </div>
            <div className="icon">{icon}</div>
            <Link
                href={link}
                className="small-box-footer"
            >Xem chi tiết <i class="fas fa-arrow-circle-right"></i></Link>
        </div>
    );
}

export default memo(CountItemDboard);
