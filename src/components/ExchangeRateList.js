import React, { useContext } from 'react';
import { ExchangeRatesContext } from '../context/ExchangeRatesContext';
import { extraCodes, totalCodes } from '../data/codes';
import { ExchangeRateItem } from './ExchangeRateItem';
import spinner from '../assets/loading.svg';

export const ExchangeRateList = () => {

    const { exchangeRatesList, setExchangeRatesList, loading } = useContext( ExchangeRatesContext );

    const handlePlusRates = () => {
        if (exchangeRatesList.pagination < totalCodes.length/4) {
            const plusCurrencies = extraCodes.slice((exchangeRatesList.pagination-1)*4, (exchangeRatesList.pagination)*4);

            setExchangeRatesList({
                ...exchangeRatesList,
                currencies: [
                    ...exchangeRatesList.currencies, 
                    ...plusCurrencies
                ],
                pagination: exchangeRatesList.pagination + 1,
            });
        };
    };

    return (
        <>
            <div className="item__container">
                {
                    !loading ?
                        exchangeRatesList.currencies.map( code =>
                            <ExchangeRateItem 
                                key = { code }
                                currency = { code }
                                value = { exchangeRatesList.rates[code] }
                            />
                        )
                    :
                        <div className="item__loading-container">
                            <img src = { spinner } height="45px" width="45px" alt="loading" />
                        </div>
                }
                
            </div>
            <button onClick = { handlePlusRates } className="buttons__secondary">Ver más cotizaciones</button>
        </>
    );
};
