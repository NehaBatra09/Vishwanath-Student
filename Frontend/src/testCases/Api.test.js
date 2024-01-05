import { apis } from '../apis';


describe('API Functions', () => {
    beforeEach(() => {
        global.fetch = jest.fn(); // Mocking the fetch function
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('GET function retrieves data', async () => {
        const mockData = { status: true, data: { message: 'Success' }, message: "Success" };
        global.fetch.mockResolvedValue({
            json: async () => mockData,
        });

        const response = await apis.get('test');

        expect(fetch).toHaveBeenCalledWith('http://localhost:4000/test');
        expect(response).toEqual({ status: true, data: { message: 'Success' }, message: 'Success' });
    });

    test('GET function handles errors', async () => {
        const mockErrorResponse = { status: false, code: false, message: 'Something went wrong.' };
        global.fetch.mockResolvedValue({
            json: async () => mockErrorResponse,
        });

        const response = await apis.get('error');

        expect(fetch).toHaveBeenCalledWith('http://localhost:4000/error');
        expect(response).toEqual({ status: false, code: false, message: 'Something went wrong.' });
    });

    test('POST function sends data', async () => {
        const mockData = { status: true, data: { message: 'Posted' }, message: "Posted" };
        global.fetch.mockResolvedValue({
            json: async () => mockData,
        });

        const payload = { key: 'value' };
        const response = await apis.post('test', payload);

        expect(fetch).toHaveBeenCalledWith('http://localhost:4000/test', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        expect(response).toEqual({ status: true, data: { message: 'Posted' }, message: 'Posted' });
    });

    test('POST function handles errors', async () => {
        const mockErrorResponse = { status: false, code: false, message: 'Error Message' };
        global.fetch.mockResolvedValue({
            json: async () => mockErrorResponse,
        });

        const payload = { key: 'value' };
        const response = await apis.post('error', payload);

        expect(fetch).toHaveBeenCalledWith('http://localhost:4000/error', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        expect(response).toEqual({ status: false, code: false, message: 'Error Message' });
    });
});
