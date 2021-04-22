import Swal from "sweetalert2";

export const getExchangeRate = async({ currency, date }) => {

    const url = `${ process.env.REACT_APP_BASE_URL }${ date }?base=${ currency }&access_key=${ process.env.REACT_APP_API_KEY }`;
    const resp = await fetch( url );
    const { error, rates, success } = await resp.json();
    
    if (success) {

        return { rates, success };

    } else if(error.code === "base_currency_access_restricted") {
        
        return Swal.fire({
            title: 'Ha ocurrido un error',
            text: 'Lo sentimos debe suscribirse para hacer esta consulta.',
            icon: 'error',
        });

    } else {

        return Swal.fire({
            title: 'Ha ocurrido un error',
            text: 'Lo sentimos vuelva a intentarlo otra vez en un momento. Estamos trabajando para solucionar el problema.',
            icon: 'error',
        });

    };

};