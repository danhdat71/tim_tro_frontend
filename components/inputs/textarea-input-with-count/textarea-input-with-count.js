import React, { useState } from 'react';
import cl from './textarea-input-with-count.module.css';

const TextareaInputWithCount = (props) => {
    let {
        className,
        placeholder,
        isDisableEnterLine,
        isDisableOnMax,
        style,
        min = 0,
        max = 999999,
        onChange,
        helpLabel,
    } = props;

    let [inputed, setInputed] = useState('');
    let [isFocus, setIsFocus] = useState(false);

    function renderSubLabel()
    {
        if (inputed == '') {
            return (
                <div>Tối thiểu {min} ký tự, tối đa {max} ký tự</div>
            )
        } else {
            let inputedLength = inputed.length;
            if (inputedLength < min || inputedLength > max) {
                var span = <span className={cl.text_red}>{inputed.length}</span>;
            } else {
                var span = <span>{inputed.length}</span>;
            }

            return (
                <div>{span} / {max} ký tự</div>
            )
        }
    }

    function handleDisableEnterLine(e)
    {
        if (isDisableEnterLine) {
            if (e.key == 'Enter') {
                e.preventDefault()
            }
        }
    }

    function handleInputed(e)
    {
        let value = e.target.value;
        if (isDisableOnMax) {
            if (value.length <= max) {
                setInputed(e.target.value);
            }
        } else {
            setInputed(e.target.value);
        }
    }

    function handleRenderHelpLabel() {
        if (helpLabel && helpLabel.length > 0) {
            let buttons = helpLabel.map(function(value, index) {
                return (
                    <button
                        key={index}
                        className={cl.button}
                        onClick={()=>{
                            setInputed(value.value);
                        }}
                    >{value.label}</button>
                )
            })
            return (
                <div className={cl.help}>
                    <div className={cl.help_label}>Gợi ý cho bạn</div>
                    <div className={cl.wrap_button}>{buttons}</div>
                </div>
            )
        }
    }

    function renderSubLabelToggleButton() {
        if (helpLabel && helpLabel.length > 0) {
            return <div
                className={cl.button_show_help}
                onClick={()=>{
                    setIsFocus(!isFocus);
                }}
            >
                <span>Chọn mẫu gợi ý</span>
                <span>{
                    isFocus == false
                        ? <i className="fas fa-caret-right"></i>
                        : <i className="fas fa-caret-down"></i>
                }</span>
            </div>
        }

        return <div></div>
    }
    
    return (
        <>
            <div><textarea
                value={inputed}
                spellCheck={false}
                className={`${className} ${cl.textarea}`}
                placeholder={placeholder}
                onKeyPress={(e)=>{
                    handleDisableEnterLine(e);
                }}
                style={style}
                onChange={(e)=>{
                    handleInputed(e);
                    onChange(e.target.value);
                }}
            ></textarea></div>
            <div className={cl.sublabel}>
                {renderSubLabelToggleButton()}
                {renderSubLabel()}
            </div>
            {isFocus && handleRenderHelpLabel()}
        </>
    );
}

export default TextareaInputWithCount;
