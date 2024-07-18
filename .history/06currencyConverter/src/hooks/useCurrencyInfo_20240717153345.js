import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null); // State to handle any errors

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.16/v1/currencies/${currency}.json`);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
                setError(null); // Reset error state on successful fetch
            } catch (error) {
                console.error('Error fetching currency data:', error);
                setError(error.message); // Set error message state
            }
        };

        if (currency) { // Check if currency is not null or undefined
            fetchCurrencyData();
        }
    }, [currency]);

    return { data, error };
}

export default useCurrencyInfo;
