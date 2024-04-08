import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import axios from '../helpers/http-requests/axios';

const useAccountCheck = () => {
    let router = useRouter();
    useEffect(function(){
        axios.get(`/auth/get-me`, {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(response => {
                if (response?.message != 'Unauthenticated.') {
                    router.push({
                        pathname : '/',
                    })
                }
            });
    }, []);
}

export default useAccountCheck;
