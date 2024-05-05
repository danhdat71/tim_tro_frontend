import React, { memo } from 'react';
import cl from './avatar-username.module.css';
import Link from 'next/link';
import { formatToMY } from '@/helpers/dateHelper';
import defaulAvatar from '@/assets/imgs/default_avatar.jpg';

const AvatarUsername = (props) => {

    let {
        avatar = null,
        fullName = '',
        createdAt = '',
        href='/',
        onUnfollowClick,
    } = props;

    function renderUnfollowButton() {
        if (onUnfollowClick) {
            return (
                <button
                    className={cl.unfollow}
                    onClick={onUnfollowClick}
                >Hủy theo dõi</button>
            )
        }
    }

    return (
        <div className={cl.wrap_avatar_username}>
            <Link href={href}>
                <div className={cl.wrap_avatar}>
                    <img
                        src={avatar ? process.env.BACKEND_URL + '/' + avatar : defaulAvatar.src}
                        loading='lazy'
                        alt={avatar ? process.env.BACKEND_URL + '/' + avatar : defaulAvatar.src}
                    ></img>
                </div>
            </Link>
            <div className={cl.wrap_info}>
                <Link href={href} className={cl.full_name}>
                    <div>{fullName}</div>
                </Link>
                <div>Tham gia vào tháng {formatToMY(createdAt)}</div>
                {renderUnfollowButton()}
            </div>
        </div>
    );
}

export default memo(AvatarUsername);
