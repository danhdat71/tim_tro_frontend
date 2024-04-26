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
            return millionPart + "triệu";
        } else if (remainder === 0) {
            return millionPart + "triệu";
        } else {
            return millionPart + "triệu" + remainder;
        }
    } else {
        return (num / 1000) + "k";
    }
}

function formatDotEach3Num(number) {
    number = String(number).split('.').join('');
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export {
    convertPriceStringToVnMoneyKey,
    formatDotEach3Num,
    formatNumber,
};
