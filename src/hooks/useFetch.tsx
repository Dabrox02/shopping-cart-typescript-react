import { useEffect, useState } from "react"

export function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then(
            (res) => {
                return res.json()
            }
        ).then(
            (data) => {
                setData(data);
                setLoading(false);
            }
        ).catch((err) => {
            setError(err);
            setLoading(false);
        })
    }, [url]);

    return { data, loading, error };
}