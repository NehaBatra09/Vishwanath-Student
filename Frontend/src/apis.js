const baseUrl = "http://localhost:5000/"

export const apis = {
    get: async function (url) {
        let res = await fetch(baseUrl + url)
        let response = await res?.json()
        if (response && response.status) {
            return { status: true, data: response.data, message: "Success" }
        }
        else {
            return { status: false, data: undefined, message: "Error Message" }
        }

    },
    post: async function (url, payload) {
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }
        let res = await fetch(baseUrl + url, config)
        let response = await res?.json()
        if (response && response.status) {
            return { status: true, data: response.data, message: response.message }
        }
        else {
            return { status: false, data: undefined, message: "Error Message" }
        }

    }
}
