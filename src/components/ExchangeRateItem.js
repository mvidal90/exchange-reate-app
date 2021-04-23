import React from 'react';
import PropTypes from "prop-types";

export const ExchangeRateItem = ({ currency, value }) => {  

    const trunkValueLength = Math.trunc(value).toString().length;
    const decimalLength = 7 - trunkValueLength;

    return (
        <div className="item__row">
            <div className="item__flag-container">
                <img
                    className="item__flag"
                    src={ 
                        currency !== "BTC" ? 
                            `https://flagcdn.com/w40/${ currency === "ANG" ? "sx" : currency.substr(0,2).toLowerCase()}.png ` 
                        : 
                            "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
                        }
                    alt={`${currency.substr(0,2)} flag`}
                /> 
            </div>
            <div className="item__code">
                <p> { currency } </p>
            </div>
            <div className="item__value">
                <p> { value.toFixed(decimalLength) } </p>
            </div>
        </div>
    );
};

ExchangeRateItem.propTypes ={
    currency: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
}
