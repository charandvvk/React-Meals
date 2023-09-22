import { useState, useCallback } from "react";

const useHttp = () => {
    const [isInProgress, setIsInProgress] = useState(false);
    const [error, setError] = useState();
    const sendRequest = useCallback(
        async ({ url, method, body, headers }, onResponse) => {
            setIsInProgress(true);
            try {
                const response = await fetch(url, {
                    method: method ? method : "GET",
                    body: body ? JSON.stringify(body) : null,
                    headers: headers ? headers : {},
                });
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }
                const data = await response.json();
                onResponse(data);
            } catch (error) {
                setError(error.message);
            }
            setIsInProgress(false);
        },
        []
    );

    return {
        isInProgress,
        error,
        sendRequest,
    };
};

export default useHttp;
