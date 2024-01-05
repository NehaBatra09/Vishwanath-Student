export function isAlphanumeric(text) {
    let alphanumericRegex = /^[0-9a-zA-Z]+$/;
    return alphanumericRegex.test(text);
}

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
    return (id.length >= 8 && isAlphanumeric(id))
}