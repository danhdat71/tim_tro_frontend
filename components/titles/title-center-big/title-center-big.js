import React, { memo } from 'react';
import cl from './title-center-big.module.css';

const TitleCenterBig = (props) => {
    let {title} = props;
    return (
        <div className={cl.title}>{title}</div>
    );
}

export default memo(TitleCenterBig);
