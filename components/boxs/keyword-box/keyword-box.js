import React from 'react';
import cl from './keyword-box.module.css';
import Link from 'next/link';

const KeywordBox = (props) => {
    let {
        title,
        items,
    } = props;

    function renderItem() {
        return items?.map(function(val, index) {
            return <div className={cl.item} key={index}><Link href={val.href}>{val.label}</Link></div>
        });
    }

    return (
        <div className={cl.search_keyword}>
            <h3>{title}</h3>
            <div>
                {renderItem()}
            </div>
        </div>
    );
}

export default KeywordBox;
