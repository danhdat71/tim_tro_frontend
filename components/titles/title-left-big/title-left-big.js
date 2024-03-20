import React from 'react';
import cl from './title-left-big.module.css';

const TitleLeftBig = (props) => {
    let {title} = props;
    return (
        <div className={cl.title}>
            {title}
        </div>
    );
}

export default TitleLeftBig;
