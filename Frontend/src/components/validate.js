
export function isNullOrBlank(text) {
    return !text && /^\s*$/.test(text)
}

export function isValidEmail(text) {

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return !isNullOrBlank(text) && emailRegex.test(text)
}
export function isNumber(text) {
    return !isNullOrBlank(text) && !isNaN(text) && (/^\d*$/).test(text) && (/^\d+$/).test(text) && parseInt(text) !== 0 && !(/^0{2,}/).test(text)
}

export function extractAlphanumeric(text) {

    const alphaNumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
    return !isNullOrBlank(text) && alphaNumericRegex.test(text)

}
export function alphaWithSpecialChars(text) {

    const alphanumericRegex = (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-={};':"\\|,.<>?])[a-zA-Z0-9!@#$%^&*()_+\-={};':"\\|,.<>?]{8,}$/)
    return !isNullOrBlank(text) && alphanumericRegex.test(text)

}
