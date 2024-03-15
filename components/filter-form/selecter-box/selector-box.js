import React from 'react';
import cl from './selector-box.module.css';

export default function SelectorBox(props) {
  return (
    <div className={cl.selector_box}>
      <span>{props.title}</span>
      <span><i className="fas fa-caret-down"></i></span>
    </div>
  )
}
