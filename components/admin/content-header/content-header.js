import { getContentHeaderText } from '@/config/admin/contentHeader';
import { useRouter } from 'next/router';
import React, { memo } from 'react';

const ContentHeader = () => {

    let router = useRouter();
    
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{getContentHeaderText(router.pathname)}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">{getContentHeaderText(router.pathname)}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ContentHeader);
