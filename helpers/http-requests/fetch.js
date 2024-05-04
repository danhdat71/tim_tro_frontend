async function get(endpoint, accessToken = '') {
    let res = await fetch(process.env.API + endpoint, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
        },
        method: 'GET',
    });

    let data = await res.json();
    let status = res?.status;

    return {
        status: status,
        data: data?.data,
    }
}

export {
    get,
}