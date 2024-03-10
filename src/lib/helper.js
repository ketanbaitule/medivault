export function formDataToJson(formData) {
    const json = {};

    formData.forEach((value, key) => {
        json[key] = value;
    });

    return json;
}