import React from 'react';

import { ExchangeRateList } from './ExchangeRateList';
import { Form } from './Form';

export const Box = () => {
    return (
        <div className="box__container">
            <div className="box__scroll">
                <h2>Historico de contizaciones</h2>

                <Form />
                <ExchangeRateList />
            </div>
        </div>
    );
};
