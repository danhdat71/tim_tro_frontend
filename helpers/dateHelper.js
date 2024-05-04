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
/**
 * Convert 2024-04-26 10:49:00 to "10:49 ngày 26/04/2024"
 * **/
function formatToHiDMY(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)} ngày ${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
    return formattedDate;
}

/**
 * Convert 2024-04-26 10:49:00 to "26/04/2024"
 * **/
function formatToDMY(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
    return formattedDate;
}

/**
 * Convert 2024-04-26 10:49:00 to "04, 2024"
 * **/
function formatToMY(inputDate) {
    const date = new Date(inputDate);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${month}, ${year}`;
}

export {
    dateToYmd,
    getToday,
    isValidDateYmd,
    formatToHiDMY,
    formatToMY,
    formatToDMY,
};
