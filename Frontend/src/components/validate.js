
export function isNullOrBlank(text) {
    return !text || /^\s*$/.test(text);
}

export function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}
export function isNumber(value) {
    return !isNaN(value);
}
export function isValidId(id) {
    return (id.length >= 8 && extractAlphanumeric(id))
}
export function extractAlphanumeric(text) {

    const alphaNumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

    return alphaNumericRegex.test(text);
}
export function alphaWithSpecialChars(text) {
    const alphanumericRegex = /^(?=.*[a-zA-Z0-9])(?=.*[@#$]).*$/;

    return !text || (alphanumericRegex.test(text) && text.length == 8);
}
