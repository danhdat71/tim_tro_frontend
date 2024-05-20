import React, { memo } from 'react';

const SidebarBrand = () => {
    return (
        <a href="#" className="brand-link">
            <span className="brand-text font-weight-light">{process.env.APP_NAME}</span>
        </a>
    );
}

export default memo(SidebarBrand);
