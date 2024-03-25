function getAllowImageExtensions()
{
    return ['image/jpeg', 'image/png'];
}

function isValidImage(fileImage)
{
    let allowedTypes = getAllowImageExtensions();
    if (!allowedTypes.includes(fileImage.type)) {
        return false;
    }

    return true;
}

export {
    getAllowImageExtensions,
    isValidImage,
};