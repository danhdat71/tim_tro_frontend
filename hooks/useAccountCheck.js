import React, { useEffect, useState } from 'react';
import axios from '../helpers/http-requests/axios';

const useAccountCheck = () => {
    let [isAuth, setIsAuth] = useState();
    useEffect(function(){
        axios.get(`/auth/get-me`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response?.message != 'Unauthenticated.') {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
            });
    }, []);

    return isAuth;
}

export default useAccountCheck;
