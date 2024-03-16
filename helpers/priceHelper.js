function convertPriceStringToVnMoneyKey(str) {
    const parts = str.split(',');
    if (parts.length === 2) {
        const firstPart = parseInt(parts[0]);
        const secondPart = parseInt(parts[1]);
        if (!isNaN(firstPart) && !isNaN(secondPart)) {
            const formattedFirstPart = formatNumber(firstPart);
            const formattedSecondPart = formatNumber(secondPart);
            return formattedFirstPart + '-' + formattedSecondPart;
        }
    }
    return "Invalid input";
}

function formatNumber(num) {
    if (num >= 1000000) {
        const millionPart = Math.floor(num / 1000000);
        const remainder = Math.round((num % 1000000) / 100000);
        if (remainder === 10) {
            return millionPart + "tr";
        } else if (remainder === 0) {
            return millionPart + "tr";
        } else {
            return millionPart + "tr" + remainder;
        }
    } else {
        return (num / 1000) + "k";
    }
}

export {
    convertPriceStringToVnMoneyKey
};
