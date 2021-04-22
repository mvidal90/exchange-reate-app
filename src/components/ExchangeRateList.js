import React, { useContext } from 'react';
import { ExchangeRatesContext } from '../context/ExchangeRatesContext';
import { extraCodes } from '../data/codes';
import { ExchangeRateItem } from './ExchangeRateItem';

export const ExchangeRateList = () => {

    const { exchangeRatesList, setExchangeRatesList } = useContext( ExchangeRatesContext );

    const handlePlusRates = () => {
        const plusCurrencies = extraCodes.slice((exchangeRatesList.pagination-1)*4, (exchangeRatesList.pagination)*4);
        //console.log(plusCurrencies)
        setExchangeRatesList({
            ...exchangeRatesList,
            currencies: [
                ...exchangeRatesList.currencies, 
                ...plusCurrencies
            ],
            pagination: exchangeRatesList.pagination + 1,
        })
    }

    return (
        <>
            <div className="item__container">
                {
                    (!exchangeRatesList.loading && !exchangeRatesList.error) &&
                        exchangeRatesList.currencies.map( code =>
                            <ExchangeRateItem 
                                key = { code }
                                currency = { code }
                                value = { exchangeRatesList.rates[code] }
                            />
                        )
                }
            </div>
            <button onClick = { handlePlusRates } className="buttons__secondary">Ver más cotizaciones</button>
        </>
    );
};
