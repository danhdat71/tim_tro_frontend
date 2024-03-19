import React from 'react';
import cl from './button-report.module.css';

const ButtonReport = (props) => {
    let {handleShowModalReport} = props;
    return (
        <button
            className={cl.report_button}
            onClick={()=>{
                handleShowModalReport(true);
            }}
        >
            <span>Báo xấu</span>
            <span><i className="fal fa-exclamation-triangle"></i></span>
        </button>
    );
}

export default ButtonReport;
