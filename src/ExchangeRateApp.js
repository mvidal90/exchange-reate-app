import React, { useEffect, useState } from 'react';
import { ExchangeRatesContext } from './context/ExchangeRatesContext';

import { Box } from './components/Box';
import { getExchangeRate } from './helpers/getExchangeRate';
import { mainCodes } from './data/codes';

export const ExchangeRateApp = () => {

    const defaultQueryValue = { currency: 'EUR', date: 'latest' };

    const [exchangeRatesList, setExchangeRatesList] = useState({
        currencies: mainCodes,
        pagination: 1,
        rates: {},
    });
    const [query, setQuery] = useState(defaultQueryValue);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getExchangeRate(query)
            .then( resp => {
                if (resp.success) {
                    setExchangeRatesList({
                        currencies: mainCodes,
                        pagination: 1,
                        rates: resp.rates,
                    })
                }
            })
            .finally( () => {
                setLoading(false);
            })
    }, [query]);

    return (
        <ExchangeRatesContext.Provider value={{ exchangeRatesList, setExchangeRatesList, setQuery, loading }}>
            <Box />
        </ExchangeRatesContext.Provider>
    );
};
