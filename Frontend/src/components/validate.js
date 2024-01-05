
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
    const alphanumericRegex = /[a-zA-Z0-9]+/g;

    const alphanumericArray = text.match(alphanumericRegex);

    const alphanumericText = alphanumericArray ? alphanumericArray.join('') : '';

    return alphanumericText;
}
export function alphaWithSpecialChars(text) {
    const alphanumericRegex = /[a-zA-Z0-9@#$]+/g;

    const alphanumericArray = text.match(alphanumericRegex);

    const alphanumericText = alphanumericArray ? alphanumericArray.join('') : '';

    return alphanumericText;
}
