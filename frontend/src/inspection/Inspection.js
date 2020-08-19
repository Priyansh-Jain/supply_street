import React from 'react';
import { Link } from "react-router-dom";  
import './Inspection.css'

function Inspection() {
    return (
        <div className="inspection_block">
            <Link to="/free-inspection" >
                <div className="free_inspection_block">
                    <div className="free_inspection_image">
                        <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1290e8860f155c380f1c02_3039041%403x.png" width="58" alt="" />
                    </div>
                    <div className="free_inspection_text">
                        Free <br/> Inspection
                    </div>
                </div>
            </Link>
            <Link to="/file-claim" >
                <div className="file_claim_block">
                    <div className="file_claim_image">
                        <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1293b423e1bd4b2b89c278_2921571%403x.png" width="58" alt=""/>
                    </div>
                    <div className="file_claim_text">
                        File a Claim
                    </div>
                </div>
            </Link>
            <Link to="/repair" >
                <div className="replace_roof_block">
                    <div className="replace_roof_image">
                        <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12939072c6226dbd635684_69886%403x.png" width="58" alt="" />                
                    </div>
                    <div className="replace_roof_text">
                        Replace or <br/> Repair a Roof
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Inspection