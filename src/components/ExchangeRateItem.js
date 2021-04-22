import React from 'react';

export const ExchangeRateItem = ({ currency, value }) => {  

    return (
        <div className="item__row">
            <div className="item__flag-container">
                <img
                    className="item__flag"
                    src={`https://flagcdn.com/w40/${currency.substr(0,2).toLowerCase()}.png`}
                    alt={`${currency.substr(0,2)} flag`}
                /> 
            </div>
            <div className="item__code">
                <p> { currency } </p>
            </div>
            <div className="item__value">
                <p> { value.toFixed(6) } </p>
            </div>
        </div>
    )
}
