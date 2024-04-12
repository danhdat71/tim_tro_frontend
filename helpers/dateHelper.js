function dateToYmd(date)
{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getToday()
{
    const date = new Date();
    return dateToYmd(date);
}

function isValidDateYmd(dateString)
{
    var parts = String(dateString).split("-");
    if (parts.length !== 3 || !parts.every(part => !isNaN(part))) {
        return false;
    }

    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[2], 10);
    var date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
} 

export {
    dateToYmd,
    getToday,
    isValidDateYmd,
};
