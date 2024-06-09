import React, { memo, useEffect, useState } from 'react';
import cl from './public-counter.module.css';
import CountUp from 'react-countup';
import axios from '@/helpers/http-requests/axios';

const PublicCounter = () => {

    let [counterData, setCounterData] = useState({});

    useEffect(function(){
        axios.get('/system-counter', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(function(res){
            if (res.status == 200) {
                setCounterData(res.data);
            }
        });
    }, []);

    return (
        <div className={cl.public_counter}>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Phòng trọ:</span>
                <CountUp
                    end={counterData?.hostel_count || 0}
                    duration={5}
                />
            </div>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Nhà nguyên căn:</span>
                <CountUp
                    end={counterData?.full_house_count || 0}
                    duration={5}
                />
            </div>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Chung cư:</span>
                <CountUp
                    end={counterData?.apartment_count || 0}
                    duration={5}
                />
            </div>
            <div className={cl.item}>
                <span><i className="fas fa-circle"></i> Ở ghép:</span>
                <CountUp
                    end={counterData?.together_count || 0}
                    duration={5}
                />
            </div>
        </div>
    );
}

export default memo(PublicCounter);
