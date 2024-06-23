import {getStringValue as getStringValueUsedType} from '@/config/productUsedType';

function getTitleHeader(router)
{
    let title = 'Cho thuê';
    let description = 'Cho thuê';
    let usedTypeString = 'các loại hình bất động sản';
    let provinceString = ' tại các tỉnh thành toàn quốc';

    if (router.query.used_type != null) {
        usedTypeString = getStringValueUsedType(router.query.used_type.split(',')[0]).toLocaleLowerCase()
    }

    if (router.query.province_label == null && router.query.province_id != null) {
        provinceString = '';
    }

    if (router.query.province_label != null) {
        provinceString = ` tại ${router.query.province_label}`;
    }

    title = description + ' ' + usedTypeString +  provinceString;
    description = description + ' ' + usedTypeString + provinceString;

    return {
        title,
        description
    }
}

export {getTitleHeader};