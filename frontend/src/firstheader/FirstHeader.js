import React from 'react';
import './FirstHeader.css';

function FirstHeader() {
    return (
        <div className="first_header">
            <div className="image_header">
                <a href="http://remoteroofing.com">
                    <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png"  alt="remote-img" className="remote_image"/>
                </a>
            </div>
            <div className="phone_header">
            <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1297d1c3fecf36271c10a2_483947%403x.png" alt="" className="phone_image" />
                <a href="tel:2148658818" className="phone_no">
                    <strong >214-865-8818</strong>
                </a>
            </div>
        </div>
    )
}

export default FirstHeader