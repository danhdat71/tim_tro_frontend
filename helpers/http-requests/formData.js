function objectToFormData(object) {
    const formData = new FormData();

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            formData.append(key, object[key]);
        }
    }

    return formData;
}

export {objectToFormData}