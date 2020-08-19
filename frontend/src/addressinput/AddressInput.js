import React,{Component} from 'react';
import "./AddressInput.css";
import PropTypes from 'prop-types';

class AddressInput extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            type: '',
            redirect: false,
          };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
    }

    onTypeChange(event) {
        this.setState({ type: event.target.value });
      }

      static contextTypes = {
        router: PropTypes.object,
      }

      handleSubmit(e){
        e.preventDefault();
        let type = this.state.type

        if(type==="free-inspection")
        {
            window.location.href = 'http://localhost:3000/free-inspection';
        }
        else if(type==="file-claim")
        {
            window.location.href = 'http://localhost:3000/file-claim';
        }
        else if(type==="repair")
        {
            window.location.href = 'http://localhost:3000/repair';
        }

     }

    render(){
        return (
            <div className="address_input">
                <div className="information">
                    <h1 className="h1_information">
                        Roof inspections made remote and easy
                    </h1>
                    <h4>
                        Get your roof inspected remotely and connect with our trusted roofers
                    </h4>
                </div>
                <div className="input_block">
                    <div className="input_img">
                        <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f13618db066ca1a332318d1_home%403x.png" width="30" alt="" className="location_image"/>
                    </div>
                    <div className="input_box">
                        <input type="text" list="mylist" placeholder="Enter Your Type" value={this.type} onChange={this.onTypeChange}></input>
                        <datalist id="mylist">
                            <option value="free-inspection" />
                            <option value="file-claim" />
                            <option value="repair" />
                        </datalist>
                    </div>
                    <div className="button">
                        <input type="submit" value="    Search    " onClick={this.handleSubmit}></input>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default AddressInput;