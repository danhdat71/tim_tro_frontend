function handleChangeRouterParam(router, key, value) {
    let routerQuery = router.query;
    routerQuery.page = 1;
    routerQuery[key] = value;

    // Handle remove location
    if (key == "province_id") {
        delete routerQuery?.district_id;
        delete routerQuery?.ward_id;
    }
    if (key == "district_id") {
        delete routerQuery?.province_id;
        delete routerQuery?.ward_id;
    }
    if (key == "ward_id") {
        delete routerQuery?.province_id;
        delete routerQuery?.district_id;
    }

    // Action push
    router.push({
        pathname: '/',
        query: routerQuery
    });
}

export {
    handleChangeRouterParam
}
