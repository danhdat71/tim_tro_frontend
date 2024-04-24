function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + 31536000000); //1 year  
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getAccessTokenByContext(context) {
    return context.req.headers.cookie
        ? context.req.headers.cookie
        ?.split('; ')
        ?.find((row) => row.startsWith('access_token='))
        ?.split('=')[1]
        : null;
}

export {
    setCookie,
    deleteCookie,
    getAccessTokenByContext,
}