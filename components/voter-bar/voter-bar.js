import React from 'react';
import cl from './voter-bar.module.css';
import ProductSmall from '../product-small/product-small';
import { Rating } from 'react-simple-star-rating';

const VoterBar = () => {
    return (
        <div className={cl.bar}>
            <div className={cl.left}>
                <div className={cl.wrap_avatar}>
                    <img src='http://localhost:3000/_next/static/media/default_avatar.cf40069d.jpg'></img>
                </div>
            </div>
            <div className={cl.right}>
                <div className={cl.name}>Nguyễn Thị C</div>
                <div className={cl.comment}>
                    <span>Ok, tuyệt vời. Mình rất thích trọ này !</span>
                </div>
                <div className={cl.vote}>
                    <Rating
                        initialValue={5}
                        readonly
                        size={25}
                    />
                </div>
                <div>
                    <ProductSmall></ProductSmall>
                </div>
            </div>
        </div>
    );
}

export default VoterBar;
