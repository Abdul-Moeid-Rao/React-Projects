import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                // const responses = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.16/v1/currencies/${currency}.json`)
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
