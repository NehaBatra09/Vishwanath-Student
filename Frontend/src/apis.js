const baseUrl = "http://localhost:4000/"

export const apis = {
    get: async function (url) {
        let res = await fetch(baseUrl + url)
        let response = await res.json()
        if (response.status) {
            return { status: true, data: response.data, message: "Success" }
        }
        else {
            return { status: false, code: false, message: "Something went wrong." }
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
        let response = await res.json()
        if (response.status) {
            return { status: true, data: response.data, message: response.message }
        }
        else {
            return { status: false, code: false, message: response.message }
        }

    }
}