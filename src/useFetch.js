import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Error fetching the data from that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetched abort");
                    } else {
                        console.log(err);
                        setError(err.message);
                        setData(false);
                    }
                })
        }, 300)

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}
export default useFetch;