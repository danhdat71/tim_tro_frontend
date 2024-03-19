import React, { memo } from 'react';
import cl from './avatar-username.module.css';
import Link from 'next/link';

const AvatarUsername = () => {
    return (
        <Link href='' className={cl.wrap_avatar_username}>
            <div className={cl.wrap_avatar}>
                <img src='https://cloud.mogi.vn/profile/thumb-mavatar/2023/01/09/324/9e86b6b033a148809d21b48f7b9bad6c.jpg' loading='lazy' alt='avatar'></img>
            </div>
            <div className={cl.wrap_info}>
                <div>Dương Tiểu Phụng</div>
                <div>Tham gia vào tháng 12, 2020</div>
            </div>
        </Link>
    );
}

export default memo(AvatarUsername);
