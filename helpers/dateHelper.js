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

export {
    dateToYmd,
    getToday,
};
