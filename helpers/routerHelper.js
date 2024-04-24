function handleChangeRouterParam(router, key, value) {
    let routerQuery = router.query;
    routerQuery.page = 1;
    routerQuery[key] = value;

    router.push({
        pathname: '/',
        query: routerQuery
    });
}

export {
    handleChangeRouterParam
}
