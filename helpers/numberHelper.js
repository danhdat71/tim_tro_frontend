/**
 * Add spacing between phone number. Ex: 0123456789 => 0123 456 789
 * **/
function formatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');

    if (phoneNumber.length < 9 || phoneNumber.length > 11) {
        return phoneNumber;
    }

    return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
}

function removeDots(numberString) {
    return numberString.split('.').join('');
}

function isNumeric(value) {
    return !isNaN(value);
}

export {
    formatPhoneNumber,
    removeDots,
    isNumeric,
};