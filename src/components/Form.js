import React, { useContext, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { ExchangeRatesContext } from '../context/ExchangeRatesContext';
import { CalendarIcon } from './CalendarIcon';
import { Option } from './Option';
import { totalCodes } from '../data/codes';

export const Form = () => {
    
    const { setQuery } = useContext( ExchangeRatesContext );

    const [date, setDate] = useState(new Date());
    const [code, setCode] = useState('EUR');

    const handleSelectCurrency = (e) =>{
        setCode( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery({
            currency: code,
            date: moment(date).format('YYYY-MM-DD'),
        })
        
    };

    return (
        <form 
            
            onSubmit={ handleSubmit } 
        >
            <label>Seleccione la moneda de referencia</label>
            <br />
            <select 
                className={ code !== "EUR" ? "form__input form__input-warning" : "form__input" }
                name="currency"
                onChange={ handleSelectCurrency }
                placeholder="Moneda"
                value={code}
            >
                {totalCodes.map( 
                    (opt, i) => 
                        <Option 
                            key={i} 
                            currency={opt} 
                        />
                    )
                }
            </select>
                {
                    code !== "EUR" &&
                        <div className="form__warning-container">
                            <span className="form__warning">Atención: para utilizar otra moneda como base de consulta debe estar suscripto.</span>
                        </div>
                }
            <br />
            <br />
            <label>Seleccione la moneda de referencia</label>
            <br />
            <DateTimePicker 
                calendarIcon={ <CalendarIcon /> }
                className={[ "form__input" ]}
                dayPlaceholder="DD"
                disableClock={ true }
                format="dd/MM/y"
                maxDate={ new Date() }
                monthPlaceholder="MM"
                onChange={ setDate }
                value={ date }
                yearPlaceholder="AAAA"
            />

            <button type="submit" className="buttons__primary" >Buscar cotizaciones</button>
        </form>
    );
};
