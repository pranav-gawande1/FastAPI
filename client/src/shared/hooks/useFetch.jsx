import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData ] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try{
            const res = await fetch(url, {
                credentials : "include",
            })
            if(res.ok){
                throw new Error("Something went wrong");
            }

            const result = await res.json();
            setData(result);
        } catch(err){
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return {data, loading, error, refetch: fetchData};
};

export default useFetch;