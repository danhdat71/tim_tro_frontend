import React, { memo, useState } from 'react';
import cl from './input-group.module.css';
import { formatDotEach3Num } from '@/helpers/priceHelper';

const InputGroup = (props) => {

    let [inputed, setInputed] = useState('');

    let {
        type,
        min = 0,
        max = 999999,
        onChange = function(){},
        placeholder,
        errMsg
    } = props;

    function handleInputValue(e) {
        let value = e.target.value;
        if (type == 'number') {
            if (!isNaN(value)) {
                onChange(value);
                setInputed(value);
            }
        }
        else if (type == 'text') {
            onChange(value);
            setInputed(value);
        }
        else if (type == 'price') {
            if (!isNaN(value.split('.').join(''))) {
                let newValue = formatDotEach3Num(value);
                onChange(newValue);
                setInputed(newValue);
            }
        }
    }

    function renderSubLabel()
    {
        if (inputed == '') {
            return (
                <div>Tối thiểu {min} ký tự, tối đa {max} ký tự</div>
            )
        } else {
            let inputedLength = inputed.length;
            if (inputedLength > max || inputedLength < min) {
                var span = <span className={cl.text_red}>{inputed.length}</span>;
            } else {
                var span = <span>{inputed.length}</span>;
            }

            return (
                <div>{span} / {max} ký tự</div>
            )
        }
    }

    function renderRemoveButton() {
        if (inputed.length > 0) {
            return (
                <button
                    className={cl.button_remove}
                    onClick={()=>{
                        setInputed('');
                    }}
                >
                    <i className="far fa-times-circle"></i>
                </button>
            )
        }
    }

    return (
        <>
            <div className={`input ${cl.input_group}`}>
                <input
                    value={inputed}
                    onChange={(e)=>{
                        handleInputValue(e);
                    }}
                    placeholder={placeholder}
                ></input>
                <div className={cl.button_list}>
                    <div>
                        {renderRemoveButton()}
                    </div>
                </div>
            </div>
            <div className={cl.sublabel}>
                <div className='err-msg'>{errMsg}</div>
                {renderSubLabel()}
            </div>
        </>
    );
}

export default memo(InputGroup);
