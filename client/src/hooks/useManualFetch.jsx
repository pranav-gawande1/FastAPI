import { useState } from "react";

const useManualFetch = () => {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const execute = async (url, method, body) => {
        setStatus('loading');
        setError(null);

        try {
            const res = await fetch(url, {
                method: method,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!res.ok) {
                throw new Error("Request failed");
            }

            const result = await res.json();
            setData(result);
            setStatus("success");
            return result;
        } catch (err) {
            setError(err.message);
        }
    };

    return { execute, data, status, error };
};

export default useManualFetch;