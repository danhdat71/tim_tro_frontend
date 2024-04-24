import React, { memo } from 'react';
import cl from './keyword-box.module.css';
import Link from 'next/link';

const KeywordBox = (props) => {
    let {
        title,
        items,
        onClick,
    } = props;

    function renderItem() {
        return items?.map(function(val, index) {
            if (index < 10) {
                return (
                    <div
                        className={cl.item}
                        key={index}
                        onClick={()=>{
                            onClick(val.id);
                        }}
                    >Tìm trọ {val.label}</div>
                )
            }
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

export default memo(KeywordBox);
