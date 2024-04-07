import React, { memo, useState } from 'react';
import cls from './input-password.module.css';

const InputPassword = (props) => {

    let {
        className,
        onChange = function(e){},
    } = props;

    let [isShow, setIsShow] = useState(false);

    function renderIcon() {
        if (isShow == true) {
            return <i className="far fa-eye"></i>
        }
        return <i className="far fa-eye-slash"></i>;
    }

    return (
        <div className={cls.input_box}>
            <input
                className={`${className} ${cls.input}`}
                type={isShow == true ? 'text' : 'password'}
                onChange={(e)=>{
                    onChange(e.target.value);
                }}
            ></input>
            <button
                type='button'
                className={`${cls.show} ${className}`}
                onClick={()=>{
                    setIsShow(!isShow);
                }}
            >{renderIcon()}</button>
        </div>
    );
}

export default memo(InputPassword);
