import React, { useContext } from 'react'; 
import { AppContext } from '../context/AppContext'; 

const Currency = () => { 
    const { dispatch, currency } = useContext(AppContext); 

    const currencyChange = () => { 
        dispatch({ 
            type: 'CHG_CURRENCY', 
            payload: currency, 
        }); 
    }; 
return ( 
    <div id="Currency"> 
        <span className='alert alert-success'>Currency (
            <select className='alert alert-success dropdown-toggle' name="Currency" id="Currency" value={currency} onChange={currencyChange}> 
                <option value="$">$ Dollar</option> 
                <option value="£">£ Pound</option> 
                <option value="€">€ Euro</option> 
                <option value="T">T Ruppee</option> 
            </select> 
        )</span> 
        </div> 
    ); 
}; 

export default Currency; 