import React from 'react';
import FirstHeader from './firstheader/FirstHeader';
import SecondHeader from './secondheader/SecondHeader';
import AddressInput from './addressinput/AddressInput';
import './Body.css';

function Body() {
    return (
        <div className="body_section"> 
            <FirstHeader />
            <SecondHeader />
            <AddressInput />
        </div>
    )
}

export default Body;