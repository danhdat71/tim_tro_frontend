function handleChangeRouterParam(router, key, value) {
    let routerQuery = router.query;
    routerQuery.page = 1;
    routerQuery[key] = value;

    // Handle remove location
    if (key == 'province_id') {
        delete routerQuery.province_label;
        delete routerQuery.district_id;
        delete routerQuery.district_label;
        delete routerQuery.ward_id;
        delete routerQuery.ward_label;
        delete routerQuery.keyword;
    }
    if (key == 'district_id') {
        delete routerQuery.district_label;
        delete routerQuery.province_label;
        delete routerQuery.province_id;
        delete routerQuery.ward_id;
        delete routerQuery.ward_label;
        delete routerQuery.keyword;
    }

    // Handle remove key if value is empty
    if (value == '' || value == null || value == undefined) {
        delete routerQuery[key];
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
