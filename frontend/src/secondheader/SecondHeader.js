import React from 'react';
import './SecondHeader.css'

function SecondHeader() {
    return (
        <div className="second_header">
            <div className="home">
                <div className="home_header"><strong>Home</strong></div>
                <div className="home_line"></div>
            </div>
            <div className="faq">
                <strong>FAQ</strong>
            </div>
            <div className="services">
                <strong>Services</strong>
            </div>
        </div>
    )
}

export default SecondHeader