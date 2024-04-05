import React from 'react';
import cl from './title-left-big.module.css';

const TitleLeftBig = (props) => {
    let {title, style} = props;
    return (
        <div style={style} className={`${cl.title}`}>
            <div>{title}</div>
        </div>
    );
}

export default TitleLeftBig;
