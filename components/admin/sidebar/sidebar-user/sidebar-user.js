import React, { memo } from 'react';

const SidebarUser = () => {
    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
            </div>
        </div>
    );
}

export default memo(SidebarUser);
