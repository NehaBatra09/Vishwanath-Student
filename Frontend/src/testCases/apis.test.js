const { apis } = require('../apis');

describe('API Test Suite', () => {
    const mockData = { id: 1, name: 'Test' };

    // Mock fetch function for testing purposes
    global.fetch = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('GET API Test', async () => {
        const url = 'example-url';

        global.fetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({ status: true, data: mockData, message: 'Success' }),
        });

        const response = await apis.get(url);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`http://localhost:5000/${url}`);
        expect(response?.status).toBe(true);
        expect(response?.data).toEqual(mockData);
        expect(response?.message).toBe('Success');
    });

    test('POST API Test', async () => {
        const url = 'example-url';
        const payload = { key: 'value' };
        const responseMessage = 'Custom response message';

        global.fetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({ status: true, data: mockData, message: responseMessage }),
        });

        const response = await apis.post(url, payload);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`http://localhost:5000/${url}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(payload),
        });
        expect(response.status).toBe(true);
        expect(response.data).toEqual(mockData);
        expect(response.message).toBe(responseMessage);
    });

    // Other tests...
});
