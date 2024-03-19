import React from 'react';
import cl from './button-report.module.css';

const ButtonReport = () => {
    return (
        <button className={cl.report_button}>
            <span>Báo xấu</span>
            <span><i class="fal fa-exclamation-triangle"></i></span>
        </button>
    );
}

export default ButtonReport;
