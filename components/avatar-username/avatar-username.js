import React, { memo } from 'react';
import cl from './avatar-username.module.css';
import Link from 'next/link';
import { formatToMY } from '@/helpers/dateHelper';
import defaulAvatar from '@/assets/imgs/default_avatar.jpg';

const AvatarUsername = (props) => {

    let {
        appId = '',
        avatar = null,
        fullName = '',
        createdAt = '',
        href='/'
    } = props;

    return (
        <Link href={href} className={cl.wrap_avatar_username}>
            <div className={cl.wrap_avatar}>
                <img
                    src={avatar ? process.env.BACKEND_URL + '/' + avatar : defaulAvatar.src}
                    loading='lazy'
                    alt={avatar ? process.env.BACKEND_URL + '/' + avatar : defaulAvatar.src}
                ></img>
            </div>
            <div className={cl.wrap_info}>
                <div>{fullName}</div>
                <div>Tham gia vào tháng {formatToMY(createdAt)}</div>
            </div>
        </Link>
    );
}

export default memo(AvatarUsername);
