import React from 'react'

export const Option = ({currency}) => {
    return (
        <option 
            value={ currency } 
            //selected={ currency === 'EUR'}
        >
            {currency}
        </option>
    )
}
