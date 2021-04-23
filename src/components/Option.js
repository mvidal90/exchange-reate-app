import React from 'react';
import PropTypes from "prop-types";

export const Option = ({currency}) => {
    return (
        <option 
            value={ currency } 
        >
            {currency}
        </option>
    );
};

Option.propTypes ={
    currency: PropTypes.object.isRequired,
}