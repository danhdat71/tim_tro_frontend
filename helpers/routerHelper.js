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
        delete routerQuery.acreage;
        delete routerQuery.prices;
        delete routerQuery.price_range;
        delete routerQuery.used_type;
        delete routerQuery.bed_rooms;
        delete routerQuery.toilet_rooms;
        delete routerQuery.is_allow_pet;
    }
    if (key == 'district_id') {
        delete routerQuery.district_label;
        delete routerQuery.province_label;
        delete routerQuery.province_id;
        delete routerQuery.ward_id;
        delete routerQuery.ward_label;
        delete routerQuery.keyword;
        delete routerQuery.acreage;
        delete routerQuery.prices;
        delete routerQuery.price_range;
        delete routerQuery.used_type;
        delete routerQuery.bed_rooms;
        delete routerQuery.toilet_rooms;
        delete routerQuery.is_allow_pet;
    }
    if (key == 'price_range') {
        delete routerQuery.district_label;
        delete routerQuery.province_label;
        delete routerQuery.province_id;
        delete routerQuery.ward_id;
        delete routerQuery.ward_label;
        delete routerQuery.keyword;
        delete routerQuery.acreage;
        delete routerQuery.prices;
        delete routerQuery.used_type;
        delete routerQuery.bed_rooms;
        delete routerQuery.toilet_rooms;
        delete routerQuery.is_allow_pet;
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
