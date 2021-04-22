import React, { useEffect, useState } from 'react';
import { ExchangeRatesContext } from './context/ExchangeRatesContext';

import { Box } from './components/Box';
import { getExchangeRate } from './helpers/getExchangeRate';
import { mainCodes } from './data/codes';

export const ExchangeRateApp = () => {

    const [exchangeRatesList, setExchangeRatesList] = useState({
        currencies: mainCodes,
        error: false,
        loading: true,
        pagination: 1,
        rates: {},
    });
    const [query, setQuery] = useState({ currency: 'EUR', date: 'latest' });

    useEffect(() => {
        getExchangeRate(query)
            .then( resp => {
                if (resp.success) {
                    setExchangeRatesList({
                        currencies: mainCodes,
                        error: !resp.success,
                        loading: false,
                        pagination: 1,
                        rates: resp.rates,
                    })
                }
            })
    }, [query]);

    return (
        <ExchangeRatesContext.Provider value={{ exchangeRatesList, setExchangeRatesList, setQuery}}>
            <Box />
        </ExchangeRatesContext.Provider>
    );
};
