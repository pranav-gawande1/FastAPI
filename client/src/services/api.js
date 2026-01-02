const BASE_URL = import.meta.env.BACKEND_URL || "http://localhost:3000";

export const apiRequest = async ({
    endpoint,
    method = "GET",
    body = null,
    headers = {},
}) => {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: body ? JSON.stringify(body) : null,
        });

        const data = await res.json();

        if(!res.ok){
            throw new Error(data.message || "API ERROr");
        }

        return data;
    } catch(error){
        throw error;
    }
};