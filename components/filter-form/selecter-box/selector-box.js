import React from 'react';
import cl from './selector-box.module.css';
import { useDispatch } from 'react-redux';
import { toggleModalFilter } from '@/redux/features/modal_filter';

export default function SelectorBox(props) {

  const dispatch = useDispatch();

  function handleEnableModalFilter(pushData)
  {
    dispatch(toggleModalFilter(pushData));
  }

  return (
    <div
      className={props.active == true ? `${cl.selector_box} ${cl.active}` : `${cl.selector_box}`}
      onClick={()=>{
        handleEnableModalFilter({
          is_enable: true,
          box_type: props.boxType,
        });
      }}
    >
      <span>{props.title}</span>
      <span><i className="fas fa-caret-down"></i></span>
    </div>
  )
}
