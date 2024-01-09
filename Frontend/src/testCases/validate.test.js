import {
    isNullOrBlank,
    isValidEmail,
    isNumber,
    isValidId,
    extractAlphanumeric,
    alphaWithSpecialChars,
} from '../components/validate'; // Replace with your actual file path

describe('Utility Function Tests', () => {
    test('Check if string is null or blank', () => {
        expect(isNullOrBlank(null)).toBe(true);
        expect(isNullOrBlank('')).toBe(true);
        expect(isNullOrBlank('   ')).toBe(true);
        expect(isNullOrBlank('hello')).toBe(false);
        expect(isNullOrBlank('   hello   ')).toBe(false);
    });

    test('Validate email format', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalidemail')).toBe(false);
        expect(isValidEmail('invalid.com')).toBe(false);
        expect(isValidEmail('another@test')).toBe(false);
    });

    test('Check if value is a number', () => {
        expect(isNumber(10)).toBe(true);
        expect(isNumber('123')).toBe(true);
        expect(isNumber('text')).toBe(false);
    });

    test('Validate ID format', () => {
        expect(isValidId('1234ABCD')).toBe(true);
        expect(isValidId('1234')).toBe(false);
        expect(isValidId('abcdefgh')).toBe(false);
    });

    test('Extract alphanumeric characters', () => {
        expect(extractAlphanumeric('abc123')).toBe(true);
        expect(extractAlphanumeric('abc')).toBe(false);
        expect(extractAlphanumeric('123')).toBe(false);
        expect(extractAlphanumeric('abc!123')).toBe(false);
    });

    test('Check if string contains alphanumeric with special characters', () => {
        expect(alphaWithSpecialChars('Abc@1234')).toBe(true);
        expect(alphaWithSpecialChars('Abc1234')).toBe(false);
        expect(alphaWithSpecialChars('Abc@')).toBe(false);
        expect(alphaWithSpecialChars('Abc@12345')).toBe(false);
    });
});
