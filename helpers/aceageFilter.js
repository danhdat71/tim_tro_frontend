function convertAcreageStringToMetter(str)
{
    const parts = str.split(',');
    if (parts.length === 2) {
        const firstPart = parseFloat(parts[0]);
        const secondPart = parseFloat(parts[1]);
        if (!isNaN(firstPart) && !isNaN(secondPart)) {
            return firstPart + "m-" + secondPart + "m";
        }
    }

    return "Invalid input";
}

export {
    convertAcreageStringToMetter
};
