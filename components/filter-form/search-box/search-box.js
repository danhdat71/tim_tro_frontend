import React from 'react';
import cl from './search-box.module.css';

export default function SearchBox() {
  return (
    <div className={cl.search_box_filter}>
        <input
            className={cl.input_search}
        />
        <div className={cl.button_list}>
            <buton
                className={cl.button_remove}
            >
                <i className="far fa-times-circle"></i>
            </buton>
            <buton
                className={cl.button_search}
            >
                <i className="fal fa-search"></i>
            </buton>
        </div>
    </div>
  )
}
