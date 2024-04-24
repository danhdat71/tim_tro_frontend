import React from 'react';
import cl from './selector-box.module.css';

export default function SelectorBox(props) {
  const {
    onClick
  } = props;
  return (
    <div
      className={props.active == true ? `${cl.selector_box} ${cl.active}` : `${cl.selector_box}`}
      onClick={onClick}
    >
      <span>{props.title}</span>
      <span><i className="fas fa-caret-down"></i></span>
    </div>
  )
}
